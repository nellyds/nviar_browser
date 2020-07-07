<template>

  <div class="logo" >
    <svg
      id="Layer_12"
      data-name="Layer 12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 247.9 301.27"
      
    >
      <path
        class="cls-1"
        d="M360,396.52c-14.73.54-50.53-.23-85.2-23.37-60.84-40.62-64-114-64.23-122V103.09c8.39-.45,67.4-2.68,111.39,44.15,38.76,41.27,38.32,91.31,38,101.21Z"
        transform="translate(-115.64 -98.85)"
      />
      <polygon
        fill="freeze"
        class="cls-2"
        points="73.1 113.58 3.61 113.13 7.08 3.52 75.97 3.95 73.1 113.58"
      />
      <path
        class="cls-2"
        d="M158.75,159.77l-38.07-58Z"
        transform="translate(-115.64 -98.85)"
      />
      <line
        fill="freeze"
        class="cls-2"
        x1="3.88"
        y1="113.19"
        x2="42.95"
        y2="58.34"
      />
      <circle
        fill="rgba(0,169,159,1)"
        class="cls-2"
        cx="134.05"
        cy="42.89"
        r="10.25"
      />
      <polyline
        fill="freeze"
        class="cls-2"
        points="92.71 5.35 59.86 33.77 92.86 32.65"
      />
      <polyline
        class="cls-2"
        points="94.67 70.82 77.86 56.65 78 35.56 94.9 36.18"
      />
    </svg>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media screen and (max-width: 417px) {
  .logo {
    border-radius: 20px;
    text-align: left;
  }
  svg {
    padding: 10px;
    border: 4px solid white;
    height: 150px;

  }
  svg path {
    fill-opacity: 1;
    fill: white;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    stroke-dashoffset: 870;
    animation: draw 2s none;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg polygon {
    fill-opacity: 1;
    fill: white;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    stroke-dashoffset: 870;
    animation: draw 4s linear;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg polyline {
    fill-opacity: 1;
    fill: rgba(255, 255, 255, 1);
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;

    stroke-dasharray: 870;
    stroke-dashoffset: 870;
    animation: draw 4s linear;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg circle {
    fill-opacity: 1;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    stroke-dashoffset: 870;

    animation: draw 4s linear;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg line {
    fill-opacity: 0;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    animation-iteration-count: 1;
    stroke-dashoffset: 870;
    animation: draw 4s linear;
    animation-fill-mode: forwards;
  }
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
}

@media screen and (min-width: 417px) {
  .logo {
    border-radius: 20px;
  }
  svg {
    height: 45vh;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  svg path {
    fill-opacity: 1;
    fill: white;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    stroke-dashoffset: 870;
    animation: draw 2s none;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg polygon {
    fill-opacity: 1;
    fill: white;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    stroke-dashoffset: 870;
    animation: draw 4s linear;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg polyline {
    fill-opacity: 1;
    fill: rgba(255, 255, 255, 1);
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;

    stroke-dasharray: 870;
    stroke-dashoffset: 870;
    animation: draw 4s linear;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg circle {
    fill-opacity: 1;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    stroke-dashoffset: 870;

    animation: draw 4s linear;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  svg line {
    fill-opacity: 0;
    stroke: rgba(0, 169, 159, 1);
    stroke-width: 3;
    stroke-dasharray: 870;
    animation-iteration-count: 1;
    stroke-dashoffset: 870;
    animation: draw 4s linear;
    animation-fill-mode: forwards;
  }
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
