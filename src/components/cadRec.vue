<template>
  <div v-if="username ==='candidate@screel.in'">
    <div class="form-group">
      <label for="candidate@screel.in">Hello! {{ username }}</label>
      <div id="v-model-select" class="demo">
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>SOFTWARE TRAINEE</option>
          <option>SOFTWARE DEVELOPER</option>
          <option>TECHNICAL SUPPORT</option>
          <option>TELEPHONIC SUPPORT</option>
          <option>MANAGER</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
    </div>
  </div>
  <div v-else>
    <label> Hello! {{ userame }} </label>
    <div class="form-group">
      <button class="btn btn-primary" v-on:click="create">create</button>
      <button class="btn btn-primary" v-on:click="update">update</button>
      <button class="btn btn-primary" v-on:click="remove">remove</button>
    </div>
  </div>
</template>

<script>

import { router } from '../_helpers';

export default {
  name: "cadRec",
  data() {
    return {
      selected: "",
      jobs: [],
    };
  },
  created: function () {
    this.fetchJobs();
  },

  methods: {
    fetchJobs() {
      let uri = "http://localhost:8000/jobs";
      this.axios.get(uri).then((response) => {
        this.jobs = response.data;
      });
    },

    create() {
      router.push({ path: 'createjob'});
    },
  },
  props: {
    username: String,
  },
};
</script>
