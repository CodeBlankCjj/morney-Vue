<template>
  <ul :class="{[classPrefix+'-tabs']: classPrefix}" class="tabs">
    <li v-for="item in dataSource" :key="item.value"
        :class="liClass(item)"
        class="tabs-item"
        @click="select(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DateSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DateSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  select(item: DateSourceItem) {
    this.$emit('update:value', item.value);
  }

  liClass(item: DateSourceItem) {
    return {
      selected: item.value === this.value, [this.classPrefix + '-tabs-item']: this.classPrefix
    };
  }
}
</script>

<style scoped lang="scss">
.tabs {
  background: #c4c4c4;
  display: flex;

  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}

</style>