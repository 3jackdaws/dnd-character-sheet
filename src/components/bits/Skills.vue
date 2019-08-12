<template>
    <div id="skills">
        <div class="row">
            <q-card class="full-width">
                <div class="row">
                    <div class="col-4">
                        <abilities />
                    </div>
                    <q-separator vertical style="margin-left: -1px" />
                    <div class="col-8">
                        <proficiencies/>
                    </div>
                </div>
            </q-card>
        </div>
    </div>
</template>

<script>
import Abilities from './Abilities'
import Proficiencies from './Proficiencies'
export default {
    
    components:{
        Abilities,
        Proficiencies
    }
}
</script>