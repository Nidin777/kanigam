<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="role">Role</label>
                <input type="text" v-model="job.role" v-validate="'required'" name="role" class="form-control" />
            </div>
            <div class="form-group">
                <label for="experience">Experience</label>
                <input type="text" v-model="job.experience" v-validate="'required'" name="experience" class="form-control" />
            </div>
            <div class="form-group">
                <label for="jobDescription">Job Description</label>
                <input type="text" v-model="job.jobDescription" v-validate="'required'" name="jobDescription" class="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="skills">Skills</label>
                <input type="skills" v-model="job.skills" v-validate="'required'" name="skills" class="form-control" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Create Job</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data () {
        return {
            job: {
                role: '',
                experience: '',
                skills: '',
                jobDescription: ''
            },
            submitted: false
        }
    },
    methods: {
        handleSubmit: function () {
            this.submitted = true;
            this.axios({
                      method: 'post',
                      url: 'https://localhost:8000/addjob',
                         data: this.job
});
        }
    }
};
</script>