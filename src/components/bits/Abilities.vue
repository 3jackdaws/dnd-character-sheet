<template>
    <div id="abilities text-center">
        <ability-item name="Strength" v-model="str"></ability-item>
        <q-separator></q-separator>
        <ability-item name="Dexterity" v-model="dex"></ability-item>
        <q-separator></q-separator>
        <ability-item name="Constitution" v-model="con"></ability-item>
        <q-separator></q-separator>
        <ability-item name="Intelligence" v-model="int"></ability-item>
        <q-separator></q-separator>
        <ability-item name="Wisdom" v-model="wis"></ability-item>
        <q-separator></q-separator>
        <ability-item name="Charisma" v-model="cha"></ability-item>

    </div>
</template>

<script>
import AbilityItem from './AbilityItem'
export default {
    components:{
        AbilityItem
    },
    data(){
        return {
            str:this.$store.state.currentCharacter.abilities.str,
            dex:this.$store.state.currentCharacter.abilities.dex,
            con:this.$store.state.currentCharacter.abilities.con,
            int:this.$store.state.currentCharacter.abilities.int,
            wis:this.$store.state.currentCharacter.abilities.wis,
            cha:this.$store.state.currentCharacter.abilities.cha,
        }
    }
}
</script>