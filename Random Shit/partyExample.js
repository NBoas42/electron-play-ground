
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import songInstance from './songInstance';



class Party {

    constructor(){

        this.PartySchema =  new Schema({
        Settings: {
            Active: Boolean,
            Auto: Boolean,
            Public: Boolean,
            Owner: String,
            Party_Rule: Number,
            Premium_Party: Boolean,
            Party_Name: String,
            Party_Join_Code: String,
            Music_Source: String
        },
        Queue: [Schema.Types.ObjectId],
        CurrentSong: {
                type: Schema.Types.ObjectId,
                ref: 'songInstance'
        },
        PlayedSongs: [{
            type: Schema.Types.ObjectId,
            ref: 'songInstance'
        }],
        Library: [{
            type: Schema.Types.ObjectId,
            ref: 'library'
        }],
        Users: [{
            type: Schema.Types.ObjectId,
            ref: 'partyUserData'
        }],
        User_Count: Number
        });

        this.ParyModel = mongoose.model('party', this.PartySchema);

    }

    async getPartyByCode(code){

        return new Promise(async(resolve, reject) => {
        let result = await Party.findOne({ "Settings.Party_Join_Code": code }, 'null');
        if (result)
            resolve(result._id);
        else
            resolve(null);
        });

    }

    async getParyCodeById(){
        return new Promise(async(resolve, reject) => {
            let result = await Party.findById(partyId);
            resolve(result.Settings.Party_Join_Code)
        });

    }

    async getPartyDataById(){
        return new Promise(async(resolve, reject) => {
        let result = await Party.findById(partyId);
        if (result) resolve(result);
        else resolve(null);
     });

    }

    isValid(){
        return mongoose.Types.ObjectId.isValid(param)
    }

    async getCurrentSong (partyCode) {
        return new Promise(async (resolve,reject) => {
            let party = await Party.findOne({"Settings.Party_Join_Code": partyCode}, "CurrentSong").populate("");
            let currentSongReference = party.CurrentSong;
            let currentSongData = await songInstance.find({_id:currentSongReference});
            resolve(currentSongData);
        });

    }  

    async getMostActiveParties(limit){
        return new Promise(async (resolve, reject) => {
        var mostActiveParties = await Party.find({}).sort({"User_Count": -1}).limit(limit);
        resolve(mostActiveParties);
        });

    }

}

module.exports = Party;