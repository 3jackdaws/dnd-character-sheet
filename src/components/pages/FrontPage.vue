<template>
    <q-page class="q-pa-md">
        <character-summary />
        <div class="row">
            <div class="col-4 q-pt-md">
                <skills />
            </div>
            <div class="col-4">

            </div>
            <div class="col-4">

            </div>
        </div>
    </q-page>
</template>


<script>
import CharacterSummary from '../bits/CharacterSummary'
import Skills from '../bits/Skills'
export default {
    components:{
        CharacterSummary,
        Skills,
    }
        
    
    
}

</script>
