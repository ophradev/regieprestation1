<script lang="ts" setup>
// Hero Section Component
</script>

<template>
  <section id="accueil" class="relative bg-gradient-to-r from-primary to-emerald-800 text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Accédez aux services gouvernementaux en quelques clics</h1>
          <p class="text-lg mb-8">Découvrez une nouvelle façon d'interagir avec les services ministériels togolais grâce à notre assistant intelligent.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-secondary text-togo-dark px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-lg flex items-center justify-center">
              <i class="fas fa-comments mr-2"></i> Discuter avec l'assistant
            </button>
            <a href="#services" class="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition duration-300 text-center">
              Découvrir nos services
            </a>
          </div>
        </div>
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
            alt="Application mobile des services ministériels togolais" 
            class="rounded-lg shadow-2xl"
          />
          <div class="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
            <div class="flex items-center space-x-2 text-togo-dark">
              <i class="fas fa-robot text-primary text-xl"></i>
              <p class="font-medium">Assistant IA disponible 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Wave SVG separator -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-16 w-full text-white">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
      </svg>
    </div>
  </section>
</template>
