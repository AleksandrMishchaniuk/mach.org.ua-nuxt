<template>
  <v-card>
    <v-card-title>
      <h2>{{ $t('components.tolerance-calculator.title') }}</h2>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap align-center>
        <v-flex d-flex md4 xs12>
          <v-text-field
            :error-messages="errorMessages.size"
            :error="$v.form.size.$error"
            :value="form.size"
            :label="$t('components.tolerance-calculator.size')+', '+$t('unit.mm')"
            @blur="$v.form.size.$touch()"
            @change="initFieldQuality"
          ></v-text-field>
        </v-flex>
        <v-flex d-flex md4 xs6>
          <v-autocomplete
            :value="form.fieldQuality"
            :items="form.fieldQualities"
            :label="$t('components.tolerance-calculator.field')"
            item-text="label"
            item-value="value"
            @change="calculateTolerance"
          ></v-autocomplete>
        </v-flex>
        <v-flex d-flex md4 xs6>
          <v-layout column>
            <v-flex>
              <v-text-field
                v-model="form.tolerance.max"
                single-line
                readonly
                solo-inverted
                :suffix="$t('unit.mm')"
                :hide-details="true"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="form.tolerance.min"
                single-line
                readonly
                solo-inverted
                :suffix="$t('unit.mm')"
                :hide-details="true"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { between } from 'vuelidate/lib/validators'

export default {
  name: 'ToleranceCalculator',
  data () {
    return {
      sizeLimit: {
        max: null,
        min: null
      },
      form: {
        size: null,
        fieldQuality: null,
        fieldQualities: [],
        tolerance: {
          min: null,
          max: null
        }
      },
      errorMessages: {
        size: null
      }
    }
  },
  methods: {
    initFieldQuality (val) {
      this.form.size = val
      this.form.fieldQualities = []
      this.form.fieldQuality = null
      this.form.tolerance.max = null
      this.form.tolerance.min = null
      if (!this.$v.form.size.$error) {
        this.errorMessages.size = null
        this.$http.get(process.env.apiUrl + '/v1/fields-qualities', {
          params: {size: this.form.size}
        }).then(
          response => {
            this.form.fieldQualities = response.body.map(val => {
              return {
                label: val,
                value: val
              }
            })
          }
        )
      } else {
        this.errorMessages.size = [this.formErrors.size]
      }
    },
    calculateTolerance (val) {
      this.form.fieldQuality = val
      this.form.tolerance.max = null
      this.form.tolerance.min = null
      if (!this.$v.form.$error) {
        this.$http.get(process.env.apiUrl + '/v1/tolerance', {
          params: {
            size: this.form.size,
            'field-quality': this.form.fieldQuality
          }
        }).then(
          response => {
            this.form.tolerance.max = parseFloat(response.body.max_val) / 1000
            this.form.tolerance.min = parseFloat(response.body.min_val) / 1000
          }
        )
      }
    }
  },
  computed: {
    formErrors () {
      return {
        size: this.$t('components.tolerance-calculator.error.size', {max: this.sizeLimit.max, min: this.sizeLimit.min})
      }
    }
  },
  validations () {
    return {
      form: {
        size: {
          between: between(this.sizeLimit.min, this.sizeLimit.max)
        }
      }
    }
  },
  created: function () {
    this.$http.get(process.env.apiUrl + '/v1/ranges-limits').then(
      response => {
        this.sizeLimit.max = response.body.max_val
        this.sizeLimit.min = response.body.min_val
      }
    )
  }
}
</script>
