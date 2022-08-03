const v3Source = require('../vue3-source/meta')

// {
//   sideTitle,
//   path,
//   category
// } -> 
// [{ title: category, collapsable: false, children: [] }]
function getHeader (posts) {
  const getPostPair = x => [x.path, x.sideTitle || x.title]

  if (posts[0].category) {
    let category = []
    for (const post of posts) {
      if (post.category) {
        category = [...category, { title: post.category, collapsable: false, children: [ getPostPair(post) ] }] 
      } else {
        category[category.length - 1].children.push(getPostPair(post))
      }
    }
    return category
  }
  return posts.map(getPostPair)
}

module.exports = {
    v3Source: getHeader(v3Source),
}