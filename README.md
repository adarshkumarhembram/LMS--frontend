# LMS Frontend

### Setup instruction

1. Clone the Project

```
    git clone https://github.com/adarshkumarhembram/lms-frontend.git
```

2. Move into directory

```
    cd lms-frontend
```

3. Install dependencies

```
    npm i
```

4. Run the server

```
    npm run dev
```


### Setting instruction for tailwind

[tailwind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
    npm install -D tailwindcss
```

2. Create config tailwind file

```
    npx tailwindcss init
```

3. Add file Instruction to tailwind config file in the content property

```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding Plugins and Dependencies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui react-hot-toast @tailwindcss/line-clamp axios
```

### Configure auto import sort esline