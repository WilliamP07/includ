<template>
  <div data-app>
    <alert-time-out
      :redirect="redirectSessionFinished"
      @redirect="updateTimeOut($event)"
    />
    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />
    <v-card class="p-3" style="border-radius: 16px">
      <v-row class="p-3">
        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <h2>{{ title }}</h2>
        </v-col>
        <v-col cols="4" sm="12" md="4" lg="4" xl="4" align="end">
          <v-btn
            rounded
            @click="addRecord()"
            class="mb-2 btn-normal no-uppercase"
            title="Agregar"
          >
            Agregar
          </v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="4" xl="4" class="pl-0 pb-0 pr-0">
          <v-text-field
            class=""
            dense
            outlined
            label="Buscar"
            type="text"
            v-model="options.search"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-data-table
        v-model="selected"
        :search="options.search"
        :headers="headers"
        :items="recordsFiltered"
        :options.sync="options"
        :loading="loading"
        item-key="id"
        sort-by="id"
        :server-items-length="total"
        :footer-props="{ 'items-per-page-options': [15, 30, 50, 100] }"
      >
        <template v-slot:item.status="{ item }">
          <v-chip
            style="color: white"
            :color="item.status == 1 ? '#FF6F15' : '#EBCDDB'"
          >
            {{ item.status == 1 ? "Público" : "Privado" }}
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-icon small class="mr-2" @click="initialize"> mdi-refresh </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="800" persistent>
      <v-card class="flexcard" height="100%">
        <v-card-title>
          <h1 class="mx-auto pt-3 mb-3 text-center black-secondary">
            {{ formTitle }}
          </h1>
        </v-card-title>

        <v-card-text>
          <v-container>
            <!-- Form -->
            <v-row class="pt-3">
              <!-- name -->
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Nombre"
                  v-model="$v.editedItem.name.$model"
                  :validation="$v.editedItem.name"
                  validationTextType="none"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                  :hide-details="true"
                />
              </v-col>
              <!-- name -->

              <!-- phone -->
              <v-col cols="12" sm="12" md="6">
                <base-input
                  label="Teléfono"
                  v-model="$v.editedItem.phone.$model"
                  :validation="$v.editedItem.phone"
                  validationTextType="none"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                  v-mask="'####-####'"
                  :hide-details="true"
                />
              </v-col>
              <!-- phone -->

              <!-- zone_name -->
              <v-col cols="12" sm="12" md="6">
                <base-select-search
                  label="Zona"
                  v-model.trim="$v.editedItem.zone_name.$model"
                  :items="zones"
                  item="zone_name"
                  :validation="$v.editedItem.zone_name"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                />
              </v-col>
              <!-- zone_name -->

              <!-- address -->
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Dirección"
                  v-model="$v.editedItem.address.$model"
                  :validation="$v.editedItem.address"
                  validationTextType="none"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                />
              </v-col>
              <!-- address -->

              <!-- status -->
              <v-col cols="12" sm="12" md="12">
                <v-checkbox
                  v-model="$v.editedItem.status.$model"
                  label="¿Publicar?"
                  style="margin-top: 0"
                ></v-checkbox>
              </v-col>
              <!-- status -->

              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Enlace de Facebook"
                  v-model="$v.socialNetworks.facebook.$model"
                  :validation="$v.socialNetworks.facebook"
                  validationTextType="none"
                  :hide-details="true"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Enlace de Instagram"
                  v-model="$v.socialNetworks.instagram.$model"
                  :validation="$v.socialNetworks.instagram"
                  validationTextType="none"
                  :hide-details="true"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Enlace de TikTok"
                  v-model="$v.socialNetworks.tiktok.$model"
                  :validation="$v.socialNetworks.tiktok"
                  validationTextType="none"
                  :hide-details="true"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Enlace de X"
                  v-model="$v.socialNetworks.x.$model"
                  :validation="$v.socialNetworks.x"
                  validationTextType="none"
                  :hide-details="true"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Enlace de YouTube"
                  v-model="$v.socialNetworks.youtube.$model"
                  :validation="$v.socialNetworks.youtube"
                  validationTextType="none"
                  :hide-details="true"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <base-input
                  label="Enlace de sitio web"
                  v-model="$v.socialNetworks.company.$model"
                  :validation="$v.socialNetworks.company"
                  validationTextType="none"
                  :hide-details="true"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-btn
                  color="btn-normal"
                  rounded
                  @click="dialogDirectoryServices = true"
                >
                  Agregar servicios
                </v-btn>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="">
                <div class="table-responsive-md">
                  <table class="table table-responsive-md table-hover">
                    <thead>
                      <th>#</th>
                      <th>Servicio</th>
                      <th class="text-center">Acciones</th>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(
                          service, index
                        ) in editedItem.directoryServicesArr"
                        :key="index"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ service.service }}
                        </td>
                        <td class="text-center">
                          <a
                            @click="deleteServices(index)"
                            class="p-1 mr-1 text-center"
                          >
                            <v-tooltip left>
                              <template v-slot:activator="{ on, attrs }">
                                <span
                                  class="material-icons hover-link"
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  delete
                                </span>
                              </template>
                              <span>Eliminar</span>
                            </v-tooltip>
                          </a>
                        </td>
                      </tr>
                      <tr v-if="editedItem.directoryServicesArr.length == 0">
                        <td colspan="5" class="text-center pt-3">
                          No se ha registrado ningún servicio
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
            </v-row>
            <!-- Form -->
            <v-row>
              <v-col align="center">
                <v-btn
                  color="btn-normal no-uppercase mt-3"
                  rounded
                  :loading="loading"
                  @click="save"
                >
                  Guardar
                </v-btn>
                <v-btn
                  color="btn-normal-close no-uppercase mt-3"
                  rounded
                  @click="close"
                >
                  Cancelar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- dialog delete -->
    <v-dialog v-model="dialogDelete" max-width="400px">
      <v-card class="h-100">
        <v-container>
          <h1 class="black-secondary text-center mt-3 mb-3">
            {{
              selected.length > 0 ? "Eliminar registros" : "Eliminar registro"
            }}
          </h1>
          <v-row>
            <v-col align="center">
              <v-btn
                color="btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
                rounded
                @click="deleteItemConfirm"
                >Confirmar</v-btn
              >
              <v-btn
                color="btn-normal-close no-uppercase mt-3 mb-3"
                rounded
                @click="closeDelete"
              >
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- dialog delete -->

    <!-- dialog directory services -->
    <v-dialog v-model="dialogDirectoryServices" max-width="600px" persistent>
      <v-card class="h-100 p-3">
        <v-container>
          <div class="d-flex justify-content-between align-items-center pt-2">
            <h3 class="mb-0">Agregar servicios</h3>
            <v-icon
              style="color: black"
              size="30"
              @click="dialogDirectoryServices = false"
              >mdi-window-close</v-icon
            >
          </div>
          <v-row>
            <v-col cols="12" md="12" class="pt-4">
              <!-- service  -->
              <base-text-area
                label="Servicio que ofrece"
                v-model="$v.directoryServices.service.$model"
                :validation="$v.directoryServices.service"
                validationTextType="none"
                :rows="6"
              />
              <!-- service -->
            </v-col>
            <v-col cols="12" class="" align="center">
              <v-btn color="btn-normal" rounded @click="addDirectoryServices"
                >Guardar</v-btn
              >
              <v-btn
                color="btn-normal-close"
                rounded
                @click="closeDialogDirectoryServices()"
              >
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- dialog directory services -->
  </div>
</template>

<script>
import directoryApi from "../apis/directoryApi";
import zoneApi from "../apis/zoneApi";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      search: "",
      selected: [],
      dialog: false,
      dialogDelete: false,
      dialogSocialNetworks: false,
      dialogDirectoryServices: false,
      headers: [
        { text: "NOMBRE", value: "name", sortable: false },
        { text: "TELÉFONO", value: "phone", sortable: false },
        { text: "DIRECCIÓN", value: "address", sortable: false },
        { text: "ZONA", value: "zone_name", sortable: false },
        { text: "ESTADO", value: "status", sortable: false },
        { text: "ACCIONES", value: "actions", sortable: false },
      ],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      title: "Directorio",
      totalItems: 0,
      total: 0,
      options: {},
      editedItem: {
        name: "",
        phone: "",
        address: "",
        zone_name: "",
        status: "",
        directoryServicesArr: [],
      },
      defaultItem: {
        name: "",
        phone: "",
        address: "",
        zone_name: "",
        status: "",
        directoryServicesArr: [],
      },
      socialNetworks: {
        facebook: "",
        youtube: "",
        instagram: "",
        x: "",
        company: "",
        tiktok: "",
      },
      socialNetworksDefault: {
        facebook: "",
        youtube: "",
        instagram: "",
        x: "",
        company: "",
        tiktok: "",
      },
      directoryServices: {
        service: "",
      },
      directoryServicesDefault: {
        service: "",
      },
      selectedTab: 0,
      loading: false,
      debounce: 0,
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      redirectSessionFinished: false,
      alertTimeOut: 0,
      zones: [],
      directoryServicesArr: [],
    };
  },

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  // Validations
  validations: {
    editedItem: {
      name: {
        required,
        minLength: minLength(1),
      },
      phone: {
        required,
        minLength: minLength(1),
      },
      address: {
        required,
        minLength: minLength(1),
      },
      zone_name: {
        required,
        minLength: minLength(1),
      },
      status: {},
    },
    socialNetworks: {
      facebook: {},
      instagram: {},
      youtube: {},
      x: {},
      company: {},
      tiktok: {},
    },
    directoryServices: {
      service: {},
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.loading = true;
      this.$v.$reset();
      this.records = [];
      this.recordsFiltered = [];

      let requests = [
        this.getDataFromApi(),
        zoneApi.get(null, {
          params: { itemsPerPage: -1 },
        }),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "No fue posible obtener el registro.", "fail");

        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          419
        );
      });

      if (responses) {
        this.zones = responses[1].data.records;
      }

      this.loading = false;
    },

    editItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.selectedTab = 0;
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.updateAlert(true, "Campos obligatorios.", "fail");
        return;
      }

      if (this.editedIndex > -1) {
        const edited = Object.assign(
          this.recordsFiltered[this.editedIndex],
          this.editedItem
        );

        const { data } = await directoryApi
          .put(`/${edited.id}`, edited)
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible actualizar el registro.",
              "fail"
            );

            this.redirectSessionFinished = lib.verifySessionFinished(
              error.response.status,
              419
            );
          });

        if (data.success) {
          this.updateAlert(true, data.message, "success");
        }
      } else {
        //Creating user
        this.loading = true;
        const { data } = await directoryApi
          .post(null, this.editedItem)
          .catch((error) => {
            this.updateAlert(true, "No fue posible crear el registro.", "fail");

            this.redirectSessionFinished = lib.verifySessionFinished(
              error.response.status,
              419
            );
          });

        if (data.success) {
          this.updateAlert(true, data.message, "success");
        }
        this.loading = false;
      }

      this.close();
      this.initialize();
      return;
    },

    deleteItem(item = null) {
      console.log(item);
      if (item) {
        this.editedIndex = this.recordsFiltered.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.selected = [];
      }

      this.dialogDelete = true;
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async deleteItemConfirm() {
      const { data } = await directoryApi
        .delete(null, {
          params: {
            selected: this.selected,
            id: this.editedItem.id,
          },
        })
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible eliminar el registro.",
            "fail"
          );

          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            419
          );
          this.close();
        });

      if (data.success) {
        this.updateAlert(true, data.message, "success");
      }

      this.initialize();
      this.closeDelete();
    },

    getDataFromApi() {
      this.loading = true;
      this.records = [];
      this.recordsFiltered = [];

      //debounce
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        const { data } = await directoryApi
          .get(null, {
            params: this.options,
          })
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible obtener los registros.",
              "fail"
            );
          });

        this.records = data.records;
        this.recordsFiltered = data.records;

        this.total = data.total;
        this.loading = false;
      }, 500);
    },

    addRecord() {
      this.dialog = true;
      this.editedIndex = -1;
      this.selectedTab = 0;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.$v.$reset();
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },

    addDirectoryServices() {
      this.$v.directoryServices.$touch();

      if (this.$v.directoryServices.$invalid) {
        this.updateAlert(true, "Campos requeridos.", "fail");
        return;
      }

      this.editedItem.directoryServicesArr.push({ ...this.directoryServices });
      this.directoryServices = Object.assign({}, this.directoryServicesDefault);
      this.$v.directoryServices.$reset();
      this.closeDialogDirectoryServices();
    },

    closeDialogDirectoryServices() {
      this.dialogDirectoryServices = false;
      this.$nextTick(() => {
        this.directoryServices = Object.assign(
          {},
          this.directoryServicesDefault
        );
        this.$v.directoryServices.$reset();
      });
    },

    deleteServices(index) {
      this.editedItem.directoryServicesArr.splice(index, 1);
    },
  },
};
</script>
