//const Extractor = require('./extractor/extractor.service')
//import charactersObj from './character.json';
// import axios from 'axios';
const charactersObj = require('./character.json');
const categoryObj = require('./category.json');
const axios = require('axios');

//extractCharacters();
extractCategory();
// axios.post("127.0.0.1:3000/rest/characters/id", params);

function extractCharacters () {
  const keys = Object.keys(charactersObj);
  for(let i in keys) {
    const id = keys[i];
    const params = {
      id : id,
      name : charactersObj[id][0],
      type : charactersObj[id][3],
      stars : charactersObj[id][2],
      pfType : charactersObj[id][6],
    }
    try {
      axios.post("http://127.0.0.1:3000/rest/characters/", params);
    } catch(e) {
      console.log(e)
    }
  }
}

function extractCategory() {
  const keys = Object.keys(categoryObj);
  for(let i in keys) {
    const codeKind = keys[i];
    const codeKeys = Object.keys(categoryObj[codeKind]);
    for(let j in codeKeys) {
      const codeKey = codeKeys[j];
      const params = {
        codeKind : codeKind,
        key : codeKey,
        relKey : codeKey.length===4? codeKey.substring(0, 2):null,
        name : categoryObj[codeKind][codeKey],
      }
      try {
        axios.post("http://127.0.0.1:3000/rest/codes/", params);
      } catch(e) {
        console.log(e)
      }
    }
  }

}

function extractImages() {
  const fs = require('fs');
  
  const keys = Object.keys(charactersObj);
  for(let i in keys) {
    const key = keys[i];
    const name = charactersObj[keys[i]][0]
    fs.copyFile(`D:/wf/output/assets/character/${name}/ui/square_0.png`, `D:/images/${key}.png`, e => {console.log(e)});
  }
}