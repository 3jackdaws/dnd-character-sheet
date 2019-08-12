<template>
    <div id="proficiencies text-center">
        <div class="bonus row q-pa-sm">
            
            <div class="col-8 text-center vertical-middle text-h6">
                Proficiency 
            </div>
            <div class="col-4 text-center position-relative" @mouseover="controlsVisible = true" @mouseleave="controlsVisible = false"> 
                <span class="text-h5">
                    <span>
                        {{ bonus }}
                    </span>
                </span>
                
                
            </div>
            <q-popup-edit v-model="bonus" buttons>
                <q-input v-model="bonus" dense autofocus />
            </q-popup-edit>
        </div>
        <q-separator></q-separator>
    </div>
</template>

<script>

export default {
    data(){
        return {
            bonus:this.$store.state.currentCharacter.proficiencyBonus,
            controlsVisible:false
        };
    }
}
</script>
\
<style scoped>
    .blue:hover{
        color: red;
    }
</style>