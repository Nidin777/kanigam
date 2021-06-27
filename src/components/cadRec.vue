<template>
  <div v-if="username === 'candidate@screel.in'">
    <table class="table table-hover">
      <thead>
        <tr>
          <td>Role</td>
          <td>Experience</td>
          <td>Skills</td>
          <td>Job Description</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.role }}</td>
          <td>{{ item.experience }}</td>
          <td>{{ item.skills }}</td>
          <td>{{ item.jobdescription }}</td>
          <!-- <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td> -->
          <!-- <td><button class="btn btn-danger">Delete</button></td> -->
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <div class="form-group">
      <button class="btn btn-primary" v-on:click="create">create</button>
      <button class="btn btn-primary" v-on:click="update">update</button>
      <button class="btn btn-primary" v-on:click="remove">remove</button>
    </div>
  </div>
</template>

<script>
import { router } from "../_helpers";

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
      router.push({ path: "createjob" });
    },
    update() {
      router.push({ path: "createjob" });
    },
    remove() {
      router.push({ path: "createjob" });
    },
  },
  props: {
    username: String,
  },
};
</script>
