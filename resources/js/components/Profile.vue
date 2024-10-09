<template>
  <div app-data>
    <!-- header -->
    <div class="card-r p-4 mt-3" style="border-radius: 10px">
      <div class="header-content">
        <div class="header-qr">
          <img src="img/phoyo.jpg" alt="" />
        </div>
        <div class="herder-info">
          <div class="info-left">
            <div class="left-title">
              <p>{{ user.name }}</p>
              <span
                class="material-icons primary-color fs-4"
                style="color: #be0216"
              >
                verified
              </span>
            </div>
            <div class="left-subtitle">
              <div class="subtitle-items">
                <span class="material-icons grey-primary-light fs-5">
                  account_circle
                </span>
                <span> {{ user.role }}</span>
              </div>
              <div class="subtitle-items">
                <span class="material-icons grey-primary-light fs-5">
                  mail
                </span>
                <span>{{ user.email }}</span>
              </div>
              <div class="subtitle-items">
                <span class="material-icons grey-primary-light fs-5">
                  star
                </span>
                <span>Seguidores:</span> <b>132</b>
              </div>
              <div class="subtitle-items">
                <span class="material-icons grey-primary-light fs-5">
                  favorite
                </span>
                <span>Siguiendo:</span> <b>234</b>
              </div>
            </div>
          </div>
          <div class="info-right">
            <v-btn class="btn btn-normal fs-5" @click="dialog = true">
              Editar Perfil
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <!-- header -->

    <v-row class="pb-3">
      <v-col cols="12" sm="12" md="12" lg="12">
        <div class="card-r p-4 mt-3" style="border-radius: 10px">
          <div class="mt-4">
            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Usuario:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.name">
                  {{ user.name }}
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>
            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Alias:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.alias">
                  {{ user.alias }}
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>

            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Correo electrónico:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.email">
                  {{ user.email }}
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>

            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Fecha de nacimiento:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.birth_date">
                  {{ user.birth_date }}
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>
            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Acerca de mi:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.about_me">
                  {{ user.about_me }}
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>

            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Dirección:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.address">
                  {{ user.address }}
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>
            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Facebook:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.facebook">
                  <a :href="user.facebook" target="_blank">
                    <v-icon style="color: #1877f2"> facebook</v-icon>
                  </a>
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>
            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Instragram:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.instagram">
                  <a :href="user.instagram" target="_blank">
                    <img
                      src="img/ig.webp"
                      style="margin-left: 4px"
                      alt=""
                      width="20"
                      height="20"
                    />
                  </a>
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>
            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">X:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.x">
                  <a :href="user.x" target="_blank">
                    <img src="img/x.webp" alt="" width="30" height="30" />
                  </a>
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>

            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Rol:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <p class="mb-0 text-black fw-bold" v-if="user.role">
                  {{ user.role }}
                </p>
                <p class="mb-0 text-black fw-bold" v-else>--</p>
              </v-col>
            </v-row>

            <v-row class="pb-3">
              <v-col cols="12" sm="4" md="4" lg="4" class="pb-0 pt-0">
                <p class="mb-0 grey-primary-light">Estado:</p>
              </v-col>
              <v-col cols="12" sm="8" md="8" lg="8" class="pb-0 pt-0">
                <v-chip
                  small
                  class="ma-2"
                  style="border-color: #53b257; color: #53b257"
                  outlined
                >
                  Activo
                </v-chip>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- dialog -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar mi información</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <base-input
                  label="Usuario*"
                  v-model.trim="$v.editedItem.name.$model"
                  :validation="$v.editedItem.name"
                  validationTextType="none"
                />
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <base-input
                  label="Alias*"
                  v-model.trim="$v.editedItem.alias.$model"
                  :validation="$v.editedItem.alias"
                  validationTextType="none"
                />
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <base-input
                  label="Correo electrónico*"
                  v-model.trim="$v.editedItem.email.$model"
                  :validation="$v.editedItem.email"
                  validationTextType="none"
                />
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <base-input
                  label="Fecha de nacimiento*"
                  v-model.trim="$v.editedItem.birth_date.$model"
                  :validation="$v.editedItem.birth_date"
                  validationTextType="none"
                  type="date"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Acerca de mi*"
                  v-model.trim="$v.editedItem.about_me.$model"
                  :validation="$v.editedItem.about_me"
                  validationTextType="none"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Dirección*"
                  v-model.trim="$v.editedItem.address.$model"
                  :validation="$v.editedItem.address"
                  validationTextType="none"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Facebook*"
                  v-model.trim="$v.editedItem.facebook.$model"
                  :validation="$v.editedItem.facebook"
                  validationTextType="none"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Instagram*"
                  v-model.trim="$v.editedItem.instagram.$model"
                  :validation="$v.editedItem.instagram"
                  validationTextType="none"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="X*"
                  v-model.trim="$v.editedItem.x.$model"
                  :validation="$v.editedItem.x"
                  validationTextType="none"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-normal-close mx-2" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn class="btn btn-normal" text @click="editProfile">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    user: {},
    dialog: false,
    editedItem: {
      name: "",
      email: "",
      alias: "",
      address: "",
      x: "",
      facebook: "",
      instagram: "",
      birth_date: "",
      about_me: "",
    },
    defaultItem: {
      name: "",
      email: "",
      alias: "",
      address: "",
      x: "",
      facebook: "",
      instagram: "",
      birth_date: "",
      about_me: "",
    },
  }),

  validations: {
    editedItem: {
      name: {},
      email: {},
      alias: {},
      address: {},
      x: {},
      facebook: {},
      instagram: {},
      birth_date: {},
      about_me: {},
    },
  },

  mounted() {
    this.initialize();
  },

  methods: {
    //obtener información del perfil
    async initialize() {
      const { data } = await axios.get("/user").catch((error) => {
        alert("No fue posible obtener la información de tu perfil.");
      });
      this.user = data.user;
    },

    async editProfile() {
      const res = await axios
        .put("/profile", this.editedItem)
        .catch((error) => {
          alert("No fue posible editar la información.");
          this.initialize();
          this.dialog = false;
        });

      if (res) {
        this.dialog = false;
        this.initialize();
      }
    },
  },
};
</script>

<style scoped>
.img-profile {
  width: 7rem;
}

.card-r {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  border-radius: 0.75rem;
  border: 1px solid #f1f1f4;
  padding: 1.75rem;
  height: 100%;
}
</style>
