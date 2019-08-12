import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        currentCharacter: {
            name:"Octavius Smork",
            background:"Folk Hero",
            alignment:"Lawful Good",
            race:"Half-Orc",
            class:"Barbarian",
            level:"3",
            abilities:{
                str:12,
                dex:10,
                con:13,
                int:8,
                wis:18,
                cha:5
            },
            proficiencyBonus:2
        }
    },
    mutations:{
        changeMessage(state, message){
            state.message = message;
        }
    }
})

export default store