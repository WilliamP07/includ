<template>
  <div app-data>
    <template>
      <v-row v-if="!loading">
        <!-- post -->
        <v-col cols="12" md="4" sm="6" v-for="(post, i) in posts" :key="i">
          <v-card class="mx-auto my-12" max-width="374">
            <v-img height="250" :src="post.image"></v-img>

            <v-card-title>{{ post.title }}</v-card-title>

            <v-card-text class="pb-0">
              <div>
                {{ post.description }}
              </div>
            </v-card-text>
            <v-card-actions class="actions-post">
              <div class="my-2 fw-bold text-black" style="padding-left: 8px">
                {{ post.user }}
              </div>

              <div class="actions">
                <v-btn icon @click="heart(i)">
                  <v-icon :class="!reactions[i].fav ? 'grey' : 'red'"
                    >mdi-heart</v-icon
                  >
                </v-btn>
                <v-btn icon @click="save(i)">
                  <v-icon :class="!reactions[i].sav ? 'grey' : 'yellow'"
                    >mdi-bookmark</v-icon
                  >
                </v-btn>
                <v-btn icon @click="share(i)">
                  <v-icon :class="!reactions[i].sha ? 'grey' : 'blue'"
                    >mdi-share-variant</v-icon
                  >
                </v-btn>
              </div>
            </v-card-actions>

            <v-card-text class="pb-0">
              <div class="fw-bold text-black">Comentarios</div>
            </v-card-text>
            <v-divider class="mx-3 my-3"></v-divider>

            <v-card-actions class="group" v-if="posts[i].comments">
              <div
                class="comments"
                v-for="(comment, j) in post.comments"
                :key="j"
              >
                <span class="text-black fw-bold">{{ comment.user }}: </span>
                <span>{{ comment.comment }}</span>
              </div>
            </v-card-actions>
            <v-card-actions v-if="posts[i].comments.length == 0">
              <div class="p-2 text-center">
                Todavía no hay comentarios. Agrega uno para iniciar la
                conversación.
              </div>
            </v-card-actions>
            <div>
              <v-card-actions>
                <v-col cols="12" xs="12" sm="12" md="12">
                  <v-text-field
                    v-model="posts[i].comment"
                    outlined
                    dense
                    placeholder="Agrega un comentario"
                    append-icon="mdi-send-circle"
                    @click:append="sendMessage(posts[i].comment, posts[i].id)"
                  ></v-text-field>
                </v-col>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
        <!-- post -->

        <!-- create -->
        <v-col cols="12" md="4" sm="4">
          <v-card
            class="mx-auto my-12 shadow-none"
            max-width="374"
            style="height: 100%; background-color: transparent"
          >
            <div class="create" @click="dialog = true">
              <v-icon size="50">mdi-plus</v-icon>
              <span class="fs-1 fw-bold text-muted">Crear</span>
            </div>
          </v-card>
        </v-col>
        <!-- create -->
      </v-row>
      <v-row v-else>
        <v-col cols="12" md="12">
          <loader />
        </v-col>
      </v-row>

      <!-- dialog -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Crear Publicación</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <base-input
                    label="Título*"
                    v-model.trim="$v.editedItem.title.$model"
                    :validation="$v.editedItem.title"
                    validationTextType="none"
                  />
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <base-input
                    label="Descripción*"
                    v-model.trim="$v.editedItem.description.$model"
                    :validation="$v.editedItem.description"
                    validationTextType="none"
                  />
                </v-col>
                <!-- cover_image -->
                <v-col cols="12" sm="12" md="6">
                  <h6 class="mb-0 fw-bold text-dark">Subir imagen</h6>
                  <span class="text-left">(Máximo 5MB | png, jpg, jpeg)</span>
                  <input-image
                    v-model="$v.editedItem.image.$model"
                    :validation="$v.editedItem.image"
                    :image="editedItem.image"
                    @update-image="editedItem.image = $event"
                  />
                </v-col>
                <!-- cover_image -->
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="btn btn-normal-close mx-2" text @click="close">
              Cancelar
            </v-btn>
            <v-btn class="btn btn-normal" text @click="createPost">
              Crear
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- dialog -->
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { required, helpers } from "vuelidate/lib/validators";

export default {
  data: () => ({
    loading: false,
    dialog: false,
    fav: false,
    sav: false,
    sha: false,
    comment: "",
    editedItem: {
      title: "",
      description: "",
      user: "",
      image: "",
    },
    defaultItem: {
      title: "",
      description: "",
      user: "",
      image: "",
    },
    posts: [],
    comments: [],
    reactions: [],
  }),

  created() {
    this.initialize();
  },

  validations: {
    editedItem: {
      title: {},
      description: {},
      user: {},
      image: {},
    },
  },

  methods: {
    //carga de publicaciones
    async initialize() {
      this.loading = true;
      const response = await axios.get("/posts").catch((error) => {
        alert("Error al obtener las publicaciones");
      });

      if (response) {
        this.posts = response.data.posts;
      }

      this.reactions = [];
      this.posts.forEach((post) => {
        this.reactions.push({
          fav: false,
          sav: false,
          sha: false,
        });
      });

      this.loading = false;
    },

    //reacciones
    heart(i) {
      this.reactions[i].fav = !this.reactions[i].fav;
    },
    save(i) {
      this.reactions[i].sav = !this.reactions[i].sav;
    },
    share(i) {
      this.reactions[i].sha = !this.reactions[i].sha;
    },

    //guardar mensajes por publicación
    async sendMessage(comment, id) {
      const res = await axios
        .post("/comment", {
          params: {
            id: id,
            comment: comment,
          },
        })
        .catch((error) => {
          alert("No fue posible comentar.");
          this.close();
        });

      if (res) {
        this.close();
        this.initialize();
      }
    },

    //crear publicación
    async createPost() {
      const res = await axios.post("/post", this.editedItem).catch((error) => {
        alert("No fue posible crear el registro.");
        this.close();
      });

      if (res) {
        this.close();
        this.initialize();
      }
    },

    //cerrar dialogo de creación
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.$v.editedItem.$reset();
      });
    },
  },
};
</script>

<style>
.grey {
  color: grey !important;
}
.red {
  color: #b60000 !important;
}
.blue {
  color: #1000c4 !important;
}
.yellow {
  color: #f3f705 !important;
}
</style>