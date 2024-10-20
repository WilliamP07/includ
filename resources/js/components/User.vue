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
    <v-card class="p-3">
      <v-row class="p-3">
        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <h2>{{ title }}</h2>
        </v-col>
        <v-col cols="4" sm="12" md="4" lg="4" xl="4" align="end">
          <!-- <v-btn
            rounded
            @click="addRecord()"
            class="mb-2 btn-normal no-uppercase"
            title="Agregar"
          >
            Agregar
          </v-btn> -->
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

    <v-dialog v-model="dialog" max-width="700" persistent>
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
                  :disabled="true"
                />
              </v-col>
              <!-- name -->

              <!-- email -->
              <v-col cols="12" sm="12" md="6">
                <base-input
                  label="Correo electrónico"
                  v-model="$v.editedItem.email.$model"
                  :validation="$v.editedItem.email"
                  validationTextType="none"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                  :disabled="true"
                />
              </v-col>
              <!-- email -->

              <!-- alias -->
              <v-col cols="12" sm="12" md="6">
                <base-input
                  label="Pronombre"
                  v-model="$v.editedItem.alias.$model"
                  :validation="$v.editedItem.alias"
                  validationTextType="none"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                  :disabled="true"
                />
              </v-col>
              <!-- alias -->

              <!-- birth_date -->
              <v-col cols="12" sm="12" md="6">
                <base-input
                  label="Fecha de nacimiento"
                  v-model="$v.editedItem.birth_date.$model"
                  :validation="$v.editedItem.birth_date"
                  validationTextType="none"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                  type="date"
                  :disabled="true"
                />
              </v-col>
              <!-- birth_date -->

              <!-- gender -->
              <v-col cols="12" sm="12" md="6">
                <base-select-search
                  label="Género"
                  v-model.trim="$v.editedItem.gender.$model"
                  :items="genders"
                  item="gender"
                  :validation="$v.editedItem.gender"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                  :disabled="true"
                />
              </v-col>
              <!-- gender -->

              <!-- department_name -->
              <v-col cols="12" sm="12" md="6">
                <base-select-search
                  label="Departmento"
                  v-model.trim="$v.editedItem.department_name.$model"
                  :items="departments"
                  item="department_name"
                  :validation="$v.editedItem.department_name"
                  :validationsInput="{
                    required: true,
                    minLength: true,
                  }"
                  :disabled="true"
                />
              </v-col>
              <!-- department_name -->
            </v-row>
            <!-- Form -->
            <v-row>
              <v-col align="center">
                <v-btn
                  color="btn-normal no-uppercase mt-3"
                  rounded
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
  </div>
</template>

<script>
import userApi from "../apis/userApi";
import genderApi from "../apis/genderApi";
import departmentApi from "../apis/departmentApi";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      search: "",
      selected: [],
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "NOMBRE", value: "name" },
        { text: "CORREO ELECTRÓNICO", value: "email" },
        { text: "PRONOMBRE", value: "alias" },
        { text: "FECHA DE NACIMIENTO", value: "birth_date" },
        { text: "DEPARTAMENTO", value: "department_name" },
        { text: "GÉNERO", value: "gender" },
        { text: "ACCIONES", value: "actions", sortable: false },
      ],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      title: "Usuarios",
      totalItems: 0,
      total: 0,
      options: {},
      editedItem: {
        name: "",
        email: "",
        alias: "",
        birth_date: "",
        gender: "",
        department_name: "",
      },
      defaultItem: {
        name: "",
        email: "",
        alias: "",
        birth_date: "",
        gender: "",
        department_name: "",
      },
      selectedTab: 0,
      loading: false,
      debounce: 0,
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      redirectSessionFinished: false,
      alertTimeOut: 0,
      genders: [],
      departments: [],
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
      email: {
        required,
        minLength: minLength(1),
      },
      alias: {
        required,
        minLength: minLength(1),
      },
      birth_date: {
        required,
        minLength: minLength(1),
      },
      gender: {
        required,
        minLength: minLength(1),
      },
      department_name: {
        required,
        minLength: minLength(1),
      },
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
        genderApi.get(null, {
          params: { itemsPerPage: -1 },
        }),
        departmentApi.get(null, {
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
        this.genders = responses[1].data.records;
        this.departments = responses[2].data.departments;
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

        const { data } = await userApi
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
        const { data } = await userApi
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
      const { data } = await userApi
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
        const { data } = await userApi
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
  },
};
</script>
