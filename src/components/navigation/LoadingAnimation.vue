<template>
  <div>
    <svg
      width="200"
      height="200"
      viewbox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        fill="none"
        r="10"
        stroke="rgba(0,169, 159,1)"
        stroke-width="2"
      >
        <animate
          attributeName="r"
          from="8"
          to="20"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="20" cy="20" fill="rgba(0,169, 159,1)" r="10" />
    </svg>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
