<template>
    <div class="ability q-pa-sm">
        <div class="text-caption text-center">{{ name }}</div>
        <div class="ability-stat-modifier text-center text-h4">{{ modifier }}</div>
        <q-popup-edit v-model="abilityValue" buttons>
            <q-input v-model="abilityValue" dense autofocus />
        </q-popup-edit>
        <div class="ability-stat-full text-center text-h6">{{ abilityValue }}</div>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        value:Number
    },
    computed:{
        modifier(){
            let val = Math.floor((this.value - 10) / 2);
            let sign = "";
            if(val > 0){
                sign = "+";
            }
            return `${sign}${val}`;
        },
        abilityValue:{
            get(){return this.value},
            set(newValue){this.$emit('input', parseInt(newValue))}
        }
    }
}
</script>