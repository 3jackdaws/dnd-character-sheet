<template>
    <div class="row">
        <q-card class="full-width">
            <div class="row">
                <div class="col-4 q-pa-md">
                    <div class="text-h5 text-center">{{ name }}</div>
                    <q-popup-edit v-model="name" buttons>
                        <q-input v-model="name" dense autofocus />
                    </q-popup-edit>
                </div>
                <q-separator vertical style="margin-left: -1px"/>
                <div class="col-8 q-px-md">
                    <div class="row q-gutter-sm justify-center">
                        
                        <div class="col">
                            <q-input class="full-width" label="Race" v-model="race"/>
                        </div>
                        <div class="col">
                            <q-input class="full-width" label="Background" v-model="background"/>
                        </div>
                        <div class="col">
                            <q-input class="full-width" label="Alignment" v-model="alignment"/>
                        </div>
                    </div>
                </div>
            </div>
            
            
             
        </q-card>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:this.$store.state.currentCharacter.name,
            race:this.$store.state.currentCharacter.race,
            klass:this.$store.state.currentCharacter.class,
            level:this.$store.state.currentCharacter.level,
            background:this.$store.state.currentCharacter.background,
            alignment:this.$store.state.currentCharacter.alignment,
            
        }
    },
    computed:{
        character(){
            return $store.state.currentCharacter
        }
    }
}
</script>