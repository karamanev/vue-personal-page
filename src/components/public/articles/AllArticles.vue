<template>
    <v-container
      fluid
      grid-list-md
      pa-2
    >
      <v-layout
        wrap
      >
        <v-flex
          v-for="card in cards"
          :key="card.title"
          v-bind="{ [`xs${card.flex}`]: true }"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>


<!-- <template>
  <div v-if="articles">
    <article v-for="(article, index) in articles" :key="index">
      <h1 color="light-primary">{{ article.title }}</h1>
      <h2>{{ article.content }}</h2>
    </article>
  </div>
</template>

-->

<script lang="ts">

import { articlesCollection } from '../../../main'

export default {
  data() {
    return {
      articles: [],
      cards: [
        {
          title: 'Pre-fab homes',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 12
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 6
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 6
        },
        {
          title: 'Favorite road tripaaas',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 6
        },
        {
          title: 'Best airlinsaes',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 6
        }
      ]
    }
  },
  firestore() {
    return {
      articles: articlesCollection.orderBy('date')
    }
  }
}
</script>

<style lang="scss">
h1{
  background-color: var(--v-primary-base) !important;
}
</style>
