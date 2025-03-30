<script lang="ts">
export default {
  props: {
    url: String || "",
    name: String || "",
    description: String || "",
    className: String || "",
  },
};
</script>

<template>
  <div :class="`ourgame-game ${className}`">
    <div
      style="
        width: 80%;
        height: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* align-items: center; */
      "
    >
      <div style="display: flex; align-items: center">
        <img
          :src="url"
          style="
            border-radius: 30px;
            scale: 0.8;
            padding: 7px;
            box-shadow: rgba(128, 12, 132, 0.15) 10px 13px 20px -10px;
          "
        />

        <div
          style="
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #272443;
          "
        >
          <p style="font-size: 22px; font-weight: 700; padding-bottom: 5px">
            {{ name }}
          </p>
          <p>{{ description }}</p>
        </div>
      </div>
      <div
        style="
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #272443;
          margin: 0 0px 0 20px;
        "
      >
        I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </div>
      <div style="display: flex; align-items: center">
        <img
          src="/src/assets/Apple.png"
          style="scale: 0.75; margin-left: -2px"
        />
        <img
          src="/src/assets/Google.png"
          style="scale: 0.75; margin-left: -28px"
        />
      </div>
    </div>
  </div>
</template>
<style>
#game1 {
  top: 0;
  left: 0px;
  opacity: 0;
  transition: all 1s ease-in-out;
}
#game2 {
  top: 0;
  right: 0px;
  opacity: 0;
  transition: all 1s ease-in-out;
}
#game3 {
  bottom: 0;
  left: 0px;
  opacity: 0;
  transition: all 1s ease-in-out;
}
.ourgame-game {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 390px;
  height: 385px;
  background: #fff;
  border-radius: 20px;
  box-shadow: rgba(128, 12, 132, 0.15) 10px 13px 10px -10px;
}
</style>
