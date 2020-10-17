const data = {
  posts: [
      { id: 1, title: "Lorem Ipsum", views: 254, user_id: 1 },
  ],
  users: [
      { id: 1, name: "Stian Martinsen" , username: "okynas", password: "test"},
  ],
  comments: [
      { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
      { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
  ]
}

module.exports = data;