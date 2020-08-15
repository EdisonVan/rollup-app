import resolve from "@rollup/plugin-node-resolve"; //编写的代码与依赖的第三方库进行合并
import babel from "rollup-plugin-babel"; //es6代码转换
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs"; //解决rollup.js无法识别CommonJS模块
import html from "@rollup/plugin-html";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import json from "rollup-plugin-json";

const isProd = process.env.NODE_ENV == "production"; // 环境 or 开发环境
const extensions = [".js", ".jsx"];

export default [
  {
    //入口文件
    input: "src/index.js",
    //输出文件
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        name: "index",
      },
    ],
    //隐掉(!) this has been rewritten to undefined这个报错，自定义警告事件
    onwarn: function (warning) {
      if (warning.code === "THIS_IS_UNDEFINED") {
        return;
      }
    },
    plugins: [
      resolve({
        extensions,
      }),
      postcss({
        extensions: [".less", ".css"],
        use: [["less", { javascriptEnabled: true }]],
        extract: false,
      }),
      babel({
        babelrc: false,
        runtimeHelpers: true,
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          ["@babel/plugin-proposal-class-properties"],
          "@babel/transform-react-jsx",
          ["@babel/proposal-decorators", { legacy: true }],
          [
            "import",
            { libraryName: "antd", libraryDirectory: "es", style: true },
            "antd",
          ],
          [
            "@babel/plugin-transform-runtime",
            {
              corejs: 3,
              helpers: true,
              regenerator: true,
              useESModules: false,
            },
          ],
        ],
      }),
      html({
        fileName: "index.html",
        title: "kg-graph",
        template: ({ title }) => {
          return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <link rel="stylesheet" href="/index.css">
        </head>
        <body>
        <div id="root"></div>
        <script src="/kgGraphApp.min.js"></script>
      </body>
      </html>
      `;
        },
      }),
      commonjs({
        include: "node_modules/**",
      }),
      json(),
      eslint({
        include: ["src/**"],
        exclude: ["node_modules/**"],
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(
          isProd ? "production" : "development"
        ),
      }),
      isProd && terser(),
      !isProd &&
        serve({
          open: true, //打开浏览器
          host: "localhost",
          port: 3000,
          contentBase: ["dist"],
        }),
      !isProd &&
        livereload({
          watch: "dist",
        }),
    ],
  },
];
