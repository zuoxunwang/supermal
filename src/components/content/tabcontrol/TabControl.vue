<!--  -->
<template>
  <div class="tab-control">
    <div
      @click="activeSp(index)"
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span :class="{ active: index == currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    activeSp(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  z-index: 3;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 6px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 3px solid deeppink;
}
</style>