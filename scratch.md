// OBSERVER FOR GLY AND ANI 
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the viewport
    threshold: 0.1 // Trigger when at least 10% of the element is visible
};

// Callback function to execute when an observed element intersects
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Check if the element is intersecting (visible)
        if (entry.isIntersecting) {
            // Add the 'is-visible' class to trigger the animation
            entry.target.classList.add('is-visible');

            // Optional: Stop observing the element once it's visible
            // This prevents the animation from re-triggering if you scroll up and down
            // observer.unobserve(entry.target);
        }
         // Optional: If you want the animation to reverse when scrolling up
         // (Remove the unobserve line above if you use this)
         // else {
         //    entry.target.classList.remove('is-visible');
         // }
    });
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Select all elements that should be animated (both fly-in and fade-in)
// We select elements with class 'fly-in' OR 'ani'
const elementsToObserve = document.querySelectorAll('.fly-in, .ani');

// Start observing each target element
elementsToObserve.forEach(el => {
    observer.observe(el);
});


  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.remove('hidden');
      scrollToTopBtn.classList.add('opacity-100');
    } else {
      scrollToTopBtn.classList.add('opacity-0');
      setTimeout(() => {
        if (scrollToTopBtn.classList.contains('opacity-0')) {
          scrollToTopBtn.classList.add('hidden');
        }
      }, 300); // match the transition duration
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });





{{ $a := .Get "a" | default "" }}
{{ $imgName := printf "%s.jpg" $a }}
{{ $img := resources.Get (printf "icons/%s" $imgName) }}


      <!-- orig r.html fly-in fly-in-right <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span> -->

<div class="ani flex justify-end items-start gap-2 px-4">
  <div class="flex flex-col items-end">
    <span class="text-sm font-semibold text-gray-900 dark:text-white mb-1">{{ $a }}</span>
    <div class="p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-lg rounded-e-xl rounded-es-xl">
      <p class="">{{ .Inner |  markdownify }}</p>
    </div>
  </div>
  {{ if $img }}
    <img class="w-12 h-12 rounded-full shadow-lg" src="{{ $img.Permalink }}" alt="{{ $a }}">
  {{ else }}
    <img class="w-12 h-12 rounded-full shadow-lg" src="/icons/blank.jpg" alt="Blank">
  {{ end }}
</div>





.fly-in {
            opacity: 0; /* Start invisible */
            transition: opacity 0.8s ease-out, transform 0.8s ease-out; /* Smooth transition for opacity and transform */
        }
        .fly-in-left {
            transform: translateX(-100%); /* Start off-screen to the left */
        }
        .fly-in-right {
            transform: translateX(100%); /* Start off-screen to the right */
        }
        .is-visible {
            opacity: 1; /* Become visible */
            transform: translateX(0); /* Move to original position */
        }


        .ani {
            opacity: 0; /* Start invisible */
            transition: opacity 1s ease-in-out; /* Smooth transition for opacity */
        }

        /* --- Visible State (Applied by JS) --- */
        .is-visible {
            opacity: 1; /* Become visible */
            transform: translateX(0); /* Move fly-in elements to original position */
            /* Opacity is handled for .ani elements by this rule too */
        }







{{ $a := .Get "a" | default "" }}
{{ $imgName := printf "%s.jpg" $a }}
{{ $img := resources.Get (printf "icons/%s" $imgName) }}

<!-- fly-in fly-in-left -->

<div class="ani p-4 flex items-start gap-4" style="margin: 0% 3% 0% 0%;">
  {{ if $img }}
    <img class="w-12 h-12 rounded-full shadow-lg" src="{{ $img.Permalink }}" alt="{{ $a }}">
  {{ else }}
    <img class="w-12 h-12 rounded-full shadow-lg" src="/icons/blank.jpg" alt="Blank">
  {{ end }}

   <div class="flex flex-col gap-1 w-full">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ $a }}</span>
         <!-- <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span> -->
      </div>
      <div class="leading-1.5 p-4 border-gray-200 dark:bg-gray-800 bg-gray-100 rounded-lg shadow-lg rounded-e-xl rounded-es-xl dark:bg-gray-700">
         <p class="font-normal text-gray-900 dark:text-white">{{ .Inner |  markdownify }}</p>
      </div>
      <!-- <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span> -->
   </div>
</div>











<div style="background-color: {{ .Params.c }}" class="mx-auto text-white flex items-center justify-center min-h-[200px] rounded-lg shadow hover:scale-110 text-white w-full">
  <a href="{{ .Permalink }}">
      <div class="text-center p-6">
        <h3 class="text-3xl text-white font-bold leading-6">{{ .Title }}</h3>
        <hr class="my-2 border-white opacity-50 w-2/3 mx-auto">
        <p class="text-sm text-gray-200">{{ .Params.heading }}</p>
        {{ if .Params.showdate }}
          <div class="leading-none text-gray-500 text-sm">
             {{ .Params.date.Format "January 2, 2006"  }}
          </div>
        {{- end }}
      </div>
  </a>
</div>


⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱ


nano config daw

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.HUGO_ENVIRONMENT === 'production'
      ? {
          cssnano: {
            preset: 'default',
          },
        }
      : {}),
  },
}




      integrity="{{ $styles.Data.Integrity }}"


      
  {{ $css := resources.Get "css/main.css" }}
    {{ if $css }}
      {{ $options := dict "inlineImports" true }}
      {{ $css = $css | css.PostCSS $options }}
      {{ if hugo.IsProduction }}
        {{ $css = $css | minify | fingerprint }}
      {{ end }}
      <link rel="stylesheet" href="{{ $css.RelPermalink }}">
    {{ else }}
      <!-- CSS file not found -->
      <style>body { color: red; }</style>
    {{ end }}

  {{ if hugo.IsProduction }}
    {{ $css = $css | minify | fingerprint | resources.PostProcess }}
  {{ end }}

    

  <link rel="stylesheet" href="{{ $css.RelPermalink }}">




  

<!-- layouts/partials/breadcrumbs.html -->
<nav aria-label="breadcrumb" class="mb-4">
  <ol class="flex flex-wrap text-sm text-gray-600">
    {{ $url := replace .RelPermalink (printf "/%s/" .Language.Lang) "/" }}
    {{ $lastUrlElement := index (last 1 (split (trim $url "/") "/")) 0 }}
    
    <!-- Home link -->
    <li class="breadcrumb-item">
      <a href="{{ .Site.Home.RelPermalink }}" class="hover:text-blue-600">
        Home
      </a>
      <span class="px-2">></span>
    </li>
    
    <!-- Build breadcrumbs based on URL path -->
    {{ $pathElements := split (trim $url "/") "/" }}
    {{ $currentPath := "/" }}
    
    {{ range $index, $element := $pathElements }}
      {{ $currentPath = printf "%s%s/" $currentPath $element }}
      {{ if ne $element $lastUrlElement }}
        <li class="breadcrumb-item">
          <a href="{{ $currentPath | relLangURL }}" class="dark:text-gray-200 hover:text-blue-600">
            {{ humanize $element }}
          </a>
          <span class="px-2">></span>
        </li>
      {{ else }}
        <li class="breadcrumb-item text-gray-900 font-medium dark:text-gray-200">
          {{ humanize $element }}
        </li>
      {{ end }}
    {{ end }}
  </ol>
</nav>



        <img class="w-12 h-12 rounded-full" src="/icons/{{ $file }}.jpg" alt="{{ $a }}">



        <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{{ . }}</p>
</blockquote>



{{ $a := .Get "a" | default "" }}

{{ $avatars := dict
  "Adam Smith" "Smith"
  "Adam-Smith" "Smith"
  "Baruch Spinoza" "Spinoza"
  "David Hume" "hume"
  "Descartes" "Rene Descartes"
  "Foreigner" "Glaucon"
  "Isaac Newton" "Newton"
  "socrates" "Socrates"
}}


{{ $file := cond (isset $avatars $a) (index $avatars $a) "Blank" }}
<!-- replace Blak with $$a  -->



  <!-- {{ range $paginator.Pages }}
          {{ with .Params.categories }}
            <span class="mx-1">•</span>
            <span>
              {{ range $index, $category := . }}
                {{ if $index }}, {{ end }}
                <a href="{{ "categories/" | relLangURL }}{{ $category | urlize }}" class="hover:underline">{{ $category }}</a>
              {{ end }}
            </span>
          {{ end }}
        </div>
        <div class="flex flex-wrap gap-2">
          {{ range .Params.tags }}
            <a href="{{ "tags/" | relLangURL }}{{ . | urlize }}" class="px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded hover:bg-blue-200">{{ . }}</a>
          {{ end }} -->



@layer base {
  /* Style headings within your main content area */
  /* Adjust '.markdown-content' to a class wrapping your Hugo content */
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    /* Default (Light Mode) Styles */
    @apply text-black mb-4 font-bold; /* Example light mode styles */
  }

/*  .markdown-content h1 {
     @apply text-4xl;
  }
  .markdown-content h2 {
     @apply text-3xl;
  }
   .markdown-content h3 {
     @apply text-2xl;
  }*/

  /* Dark Mode Styles */
  .dark .markdown-content h1,
  .dark .markdown-content h2,
  .dark .markdown-content h3 {
     /* Apply dark mode text color */
    @apply text-gray-100; /* Example dark mode text color */
     /* Add any other dark-mode specific overrides */
  }

  /* Alternatively, using Tailwind's dark: variant directly if preferred */
  /* This achieves the same as the .dark selector above with class strategy */
  /*
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    @apply text-gray-900 dark:text-gray-100 mb-4 font-bold;
  }
  .markdown-content h1 { @apply text-4xl; }
  .markdown-content h2 { @apply text-3xl; }
  .markdown-content h3 { @apply text-2xl; }
  */
}
