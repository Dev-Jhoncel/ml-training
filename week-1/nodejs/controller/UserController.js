const fs = require('fs');
const jsondata = require("./data.json")
const path = require("path")
const filePath = path.join(__dirname,'data.json')
let date = new Date();
const getAllUser = async (req,res) => {
    try
    {
        console.log(jsondata);
        let arr_data = [jsondata];
        if(arr_data.length === 0) throw new Error('NO_DATA');
        return res.status(200).json({status: 'SUCCESS', message : "Success generating all users", data: arr_data})
    }
    catch(error)
    {
        console.log(error.message);
        if(error.message === "NO_DATA") return res.status(404).json({status: 'NO_DATA', message : "no data found!", data: null})
        return res.status(500).json({status: 'INTERNAL_SERVER_ERROR', message : "Error Encountered", data: error.message})
    }
}

const insertNewUser = async (req,res) => {
    try
    {
        
    
    const highestId = jsondata.reduce((max, obj) => Math.max(max, obj.id), 0);
    console.log(highestId);
    let new_id = highestId + 1;
        let user_details = {
        id: new_id,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        phoneNumbers: req.body.phoneNumbers,
        createdAt: date,
        updatedAt: date,
        deletedAt: "",
        }
        const json = fs.readFileSync(filePath,'utf8');
        let json_data = JSON.parse(json);
        console.log(json_data instanceof Array);
        json_data.push(user_details);
        console.log(json_data);
        fs.writeFileSync(filePath, '');
        if(json_data.length === 0) throw new Error('NO_DATA');
        const jsonData = JSON.stringify(json_data, null, 2);
        fs.writeFileSync(filePath,jsonData)
        return res.status(200).json({status: 'SUCCESS', message : "Success insert user!", data: json_data})
    }
    catch(error)
    {
        console.log(error.message);
        if(error.message === "NO_DATA") return res.status(404).json({status: 'NO_DATA', message : "no data found!", data: null})
        return res.status(500).json({status: 'INTERNAL_SERVER_ERROR', message : "Error Encountered", data: error.message})
    }
}


const getSpecificUser = async (req,res) => {
    const { id } = req.params
    try
    {
        console.log(`${typeof id} - ${id}`);
        let formattedId = parseInt(id)
        const get_json = jsondata
        let row = get_json.filter(obj => obj.id === formattedId);
        if(row.length === 0) throw new Error('NO_DATA');
        return res.status(200).json({status: 'SUCCESS', message : "Success generating specific user!", data: row})
    }
    catch(error)
    {
        console.log(error.message);
        if(error.message === "NO_DATA") return res.status(404).json({status: 'NO_DATA', message : "no data found!", data: null})
        return res.status(500).json({status: 'INTERNAL_SERVER_ERROR', message : "Error Encountered", data: error.message})
    }
}

const deleteSpecificUser = async (req,res) => {
    const { id } = req.params
    try
    {
        console.log(`${typeof id} - ${id}`);
        let formattedId = parseInt(id)
        const get_json = jsondata
        let row = get_json.filter(obj => obj.id === formattedId);
        if(row.length === 0) throw new Error('NO_DATA');
        let new_row = get_json.filter(obj => obj.id !== formattedId)
        fs.writeFileSync(filePath, '');
        const jsonData = JSON.stringify(new_row, null, 2);
        fs.writeFileSync(filePath,jsonData)
        return res.status(200).json({status: 'SUCCESS', message : "Success deleting specific user!", data: row})
    }
    catch(error)
    {
        console.log(error.message);
        if(error.message === "NO_DATA") return res.status(404).json({status: 'NO_DATA', message : "no data found!", data: null})
        return res.status(500).json({status: 'INTERNAL_SERVER_ERROR', message : "Error Encountered", data: error.message})
    }
}

const updateSpecificUser = async (req,res) => {
    const { id } = req.params
    try
    {
        console.log(`${typeof id} - ${id}`);
        let formattedId = parseInt(id)
        const get_json = jsondata
        let row = get_json.filter(obj => obj.id === formattedId);
        if(row.length === 0) throw new Error('NO_DATA');
        if(row.length !== 0)
        {
            let user_details = {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                address: req.body.address,
                phoneNumbers: req.body.phoneNumbers,
                createdAt: date,
                updatedAt: date,
                deletedAt: "",
                }
            row.map(item => {
                item.name = user_details.name,
                item.email = user_details.email,
                item.age = user_details.age,
                item.address = user_details.address,
                item.phoneNumbers = user_details.phoneNumbers,
                item.updatedAt = date,
                item.deletedAt = date
                })
        }
        let new_row = get_json.filter(obj => obj.id !== formattedId)
        new_row.push(row);
        fs.writeFileSync(filePath, '');
        const jsonData = JSON.stringify(new_row, null, 2);
        fs.writeFileSync(filePath,jsonData)
        return res.status(200).json({status: 'SUCCESS', message : "Success updating specific user!", data: new_row})
    }
    catch(error)
    {
        console.log(error.message);
        if(error.message === "NO_DATA") return res.status(404).json({status: 'NO_DATA', message : "no data found!", data: null})
        return res.status(500).json({status: 'INTERNAL_SERVER_ERROR', message : "Error Encountered", data: error.message})
    }
}


module.exports =  { getAllUser , insertNewUser , getSpecificUser, deleteSpecificUser , updateSpecificUser }
