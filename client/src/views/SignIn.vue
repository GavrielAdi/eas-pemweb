<template>
  <main class="flex flex-col gap-2 items-center justify-center h-screen bg-neutral-900">
    <h1 class="text-2xl font-semibold text-neutral-200 pb-8">
      Welcome back! Please login using your account 😁
    </h1>

    <form @submit.prevent="signIn" class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <p class="text-md text-neutral-200">Email</p>
          <input
            v-model="email"
            placeholder="Enter your email"
            type="email"
            class="px-3 rounded py-1 bg-neutral-700 text-neutral-200"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-md text-neutral-200">Password</p>
          <input
            v-model="password"
            placeholder="Enter your password"
            type="password"
            class="px-3 rounded py-1 bg-neutral-700 text-neutral-200"
          />
        </div>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-neutral-50 px-4 py-1 rounded hover:bg-blue-600 duration-500"
      >
        Login
      </button>
    </form>
    <div class="pt-8 text-center">
      <p class="text-lg text-neutral-200 pb-6">
        Don't have an account?
        <router-link to="/signup"
          ><button
            type="button"
            class="font-semibold text-blue-400 hover:text-blue-500 duration-500"
          >
            Sign Up
          </button></router-link
        >
      </p>
      <button
        type="button"
        @click="$router.push('/')"
        class="bg-blue-500 text-neutral-50 px-6 py-1 rounded hover:bg-blue-600 duration-500"
      >
        Back to Home
      </button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn() {
      const userExist = {
        email: this.email,
        password: this.password
      }

      try {
        const response = await fetch('http://localhost:3000/api/Registration/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userExist)
        })

        if (!response.ok) {
          const errorMsg = (await response.json())?.errors[0].message
          throw new Error(errorMsg)
        }

        this.$router.push('/home')
      } catch (error) {
        alert('Sign Up Error ' + error.message)
      }
    }
  }
}
</script>
