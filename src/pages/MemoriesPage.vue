<template>
    <base-layout pageTitle="All Memories">
        <ion-list>
            <ion-item router-link="/memories/1">A trip to the mountains</ion-item>
            <ion-item>Surfing the sea</ion-item>
            <ion-item>Good eating</ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import {
    IonList,
    IonItem
} from "@ionic/vue"

import BaseLayout from '../components/base/BaseLayout.vue';

export default {
    components: {
        IonList,
        IonItem,
        BaseLayout
    }
}
</script>
