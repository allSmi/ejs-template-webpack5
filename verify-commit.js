// # 自定义校验git message规则, .husky/commit-msg 配置 cross-env HUSKY_GIT_PARAMS=$1 node verify-commit.js
const msgPath = process.env.HUSKY_GIT_PARAMS
console.log('xxx', msgPath);
// console.log('xxx', process.env);
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()
console.log('msg', msg);

// 提前定义好 commit message 的格式，如果不符合格式就退出程序。
const commitRE =
  /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md
    `)

  process.exit(1)
}
