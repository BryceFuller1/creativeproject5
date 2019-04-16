<template>
<div id="app">
  <div >
    <ul>
      <li >
        <router-link to="/" class="pure-menu-link">Home</router-link>
      </li>
      <li >
        <router-link to="/mypage" class="pure-menu-link">My pandas</router-link>
      </li>
    </ul>
  </div>
  <p class="daSpace"></p>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<style>

.daSpace {
  margin: 20px;

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li :hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
