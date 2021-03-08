<template>
    <base-layout pageTitle="All Memories">
        <ion-list>
            <ion-item v-for="memory in memories" :router-link="`/memories/${memory.id}`" :key="memory.id">
                <ion-thumbnail slot="start">
                    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                </ion-thumbnail>
                <ion-label>{{ memory.title }}</ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel
} from "@ionic/vue"

import BaseLayout from '../components/base/BaseLayout.vue';

export default {
    components: {
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
        BaseLayout
    },
    data() {
        return {
            memories: [
                {
                    id: "m1",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Castle_Mountain.jpg/270px-Castle_Mountain.jpg",
                    title: "A trip to the mountains",
                    description: "It was a really nice trip"
                },
                {
                    id: "m2",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mavericks_Surf_Contest_2010b.jpg/220px-Mavericks_Surf_Contest_2010b.jpg",
                    title: "Surfing the sea",
                    description: "Feeling the cool breeze"
                },
                {
                    id: "m3",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
                    title: "Good eating",
                    description: "Really good."
                }
            ]
        };
    }
}
</script>
