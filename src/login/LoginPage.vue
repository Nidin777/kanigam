<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" v-on:click="loginUser">Login</button>
            </div>
        </form>
    </div>
</template>

<script>

import { router } from '../_helpers';

export default {
    name: 'LoginPage',
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    methods: {
        loginUser: function () {
            let uri = 'https://localhost:8000/jobs';
            this.axios.get(uri).then((response) => {
                console.log(response.data)
            });
            this.submitted = true;
            const { username, password } = this;
            if ((username === "candidate@screel.in" || username === "recruiter@screel.in") && password) {
                router.push({ name: 'cadRec', params: { username }  });
            }
    }
    }
};
</script>