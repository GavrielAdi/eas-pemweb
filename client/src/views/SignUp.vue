<template>
  <main class="flex flex-col gap-2 items-center justify-center h-screen bg-neutral-900">
    <h1 class="text-2xl font-semibold text-neutral-200 pb-8">
      Welcome! Please create a new account 😁
    </h1>

    <form @submit.prevent="signUp" class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <p class="text-md text-neutral-200">Name</p>
          <input
            v-model="name"
            placeholder="Enter your name"
            type="text"
            class="px-3 rounded py-1 bg-neutral-700 text-neutral-200"
          />
        </div>
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
        <div class="flex flex-col gap-1">
          <p class="text-md text-neutral-200">School</p>
          <input
            v-model="school"
            placeholder="Enter your school"
            type="school"
            class="px-3 rounded py-1 bg-neutral-700 text-neutral-200"
          />
        </div>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-neutral-50 px-4 py-1 rounded hover:bg-blue-600 duration-500"
      >
        Register
      </button>
    </form>
    <div class="pt-8 text-center">
      <p class="text-lg text-neutral-200 pb-6">
        Already have an account?
        <router-link to="/signin"
          ><button
            type="button"
            class="font-semibold text-blue-400 hover:text-blue-500 duration-500"
          >
            Login
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
      name: '',
      email: '',
      password: '',
      school: ''
    }
  },
  methods: {
    async signUp() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        school: this.school
      }

      try {
        const response = await fetch('http://localhost:3000/api/Registration/', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })

        if (!response.ok) {
          const errorMsg = (await response.json())?.errors[0].message
          throw new Error(errorMsg)
        }

        this.$router.push('/signin')

        alert('Sign up success!')
      } catch (error) {
        alert('Sign Up Error ' + error.message)
      }
    }
  }
}
</script>
