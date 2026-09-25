const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// Mock Dataset acting as your local database storage layer
const postsData = [
    {
        id: 42,
        title: "Mastering Express.js",
        comments: [
            { id: 108, text: "Awesome article!" },
            { id: 109, text: "Great explanation!" }
        ]
    },
    {
        id: 43,
        title: "Node.js Architecture",
        comments: [
            { id: 201, text: "Very informative." }
        ]
    },
    {
        id: 44,
        title: "Event Loop",
        comments: [
            { id: 108, text: "Very helpful artical!" },
            { id: 109, text: "Great explanation!" }
        ]
    },
    {
        id: 45,
        title: "Building Scalable Distributed Systems",
        comments: [
            { id: 202, text: "Amazing!" }
        ]
    }
];


app.get('/posts/:postId/comments/:commentId', (req,res) => {
    let postid = parseInt(req.params.postId);
    let cid = parseInt(req.params.commentId);

    let postlist = postsData.map(x => x.id);
    let colist = postsData.map(x => x.comments.map(y => y.id));
    console.log(postlist, colist)

    res.json(postsData.find(x => x.id == postid).find(y => y.id == cid))
})
// TODO: Create a GET route for /posts/:postId/comments/:commentId
// 1. Extract parameters and parse them to integers using parseInt()
// 2. Locate the target post from postsData. If missing, return 404 with "Post not found"
// 3. Locate the target comment within that post. If missing, return 404 with "Comment not found"
// 4. Return the matched comment object as a JSON payload with a 200 status code


app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});

module.exports = { app, postsData };'



'



let devices = [
  { id: 1, name: 'Living Room Light', type: 'light', status: true },
  { id: 2, name: 'Bedroom Blind', type: 'blind', status: false },
  { id: 3, name: 'Hallway Thermostat', type: 'thermostat', status: true },
  { id: 4, name: 'Kitchen Light', type: 'light', status: false },
];

function allDevices() {
  return devices
}

function findDevice(id) {
  if (devices.find(x => x.id == id)){
    return id
  } 
  return undefined
}

function togglePower(id) {
  if (!findDevice(id)){
    return null
  } 
  console.log("Sending wireless signal to physical device...")

  devices.forEach((x => {
    if (x.id == id){
      x.status = !x.status
    }
  }))

  let enwobj = devices.find(x => x.id == id)

  return enwobj

}

module.exports = { allDevices, findDevice, togglePower };




