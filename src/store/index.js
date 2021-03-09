import { createStore } from "vuex";

const store = createStore({
    state() {
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
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            }
        }
    }
});

export default store;