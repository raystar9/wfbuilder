//const Extractor = require('./extractor/extractor.service')
//import charactersObj from './character.json';
// import axios from 'axios';
const fs = require('fs');
const charactersObj = require('./character.json');
const categoryObj = require('./category.json');
const equipmentJP = require('./equipment_jp.json');
const equipmentKR = require('./equipment_kr.json');
const item = require('./item.json');
const axios = require('axios');

//extractCharacters();
//extractCategory();
//extractItemImages();
//extractImages();
extractItemData();
// axios.post("127.0.0.1:3000/rest/characters/id", params);

function extractCharacters() {
  const keys = Object.keys(charactersObj);
  for (let i in keys) {
    const id = keys[i];
    const params = {
      id: id,
      name: charactersObj[id][0],
      type: charactersObj[id][3],
      stars: charactersObj[id][2],
      pfType: charactersObj[id][6],
    }
    try {
      axios.post("http://127.0.0.1:3000/rest/characters/", params);
    } catch (e) {
      console.log(e)
    }
  }
}

function extractCategory() {
  const keys = Object.keys(categoryObj);
  for (let i in keys) {
    const codeKind = keys[i];
    const codeKeys = Object.keys(categoryObj[codeKind]);
    for (let j in codeKeys) {
      const codeKey = codeKeys[j];
      const params = {
        codeKind: codeKind,
        key: codeKey,
        relKey: codeKey.length === 4 ? codeKey.substring(0, 2) : null,
        name: categoryObj[codeKind][codeKey],
      }
      try {
        axios.post("http://127.0.0.1:3000/rest/codes/", params);
      } catch (e) {
        console.log(e)
      }
    }
  }

}

function extractItemData() {
  const equipmentKeys = Object.keys(equipmentJP)
  for (let eqKey in equipmentJP) {
    //let eqKey = equipmentKeys[i]
    let type = item[eqKey][12]
    if(type.length > 1) {
      type = 6;
    }

    let name = equipmentKR[eqKey]? equipmentKR[eqKey][1]: equipmentJP[eqKey][1];
    let params = {
      id: eqKey,
      name,
      type,
    }
    axios.post("http://127.0.0.1:3000/rest/items/", params);
  }
}

function extractItemImages() {
  const equipmentKeys = Object.keys(equipmentJP)
  for (let i in equipmentKeys) {
    let eqKey = equipmentKeys[i]
    let path = equipmentJP[eqKey][6]
    fs.copyFile(`D:/wf_jp/output/assets/${path}.png`, `D:/images/equipments/${eqKey}.png`, e => { console.log(e) });
  }
}

function extractImages() {

  const keys = Object.keys(charactersObj);
  for (let i in keys) {
    const key = keys[i];
    const name = charactersObj[keys[i]][0]
    fs.copyFile(`D:/wf_jp/output/assets/character/${name}/ui/square_0.png`, `D:/images/characters/${key}.png`, e => { console.log(e) });
  }
}