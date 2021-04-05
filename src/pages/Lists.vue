<template>
  <q-page class="flex flex-center text-inter bg-grey-2">
    <q-toolbar class="text-primary" transparent>
      <q-toolbar-title class="text-h5 q-ma-lg">Lists</q-toolbar-title>
      <div style="max-width: 70px">
        <q-btn
          push
          color="white"
          text-color="primary"
          round
          icon="mdi-plus-thick"
        />
        <div class="text-center">new list</div>
      </div>
    </q-toolbar>
    <q-card
      v-for="category in lists"
      :key="category"
      class="q-ma-lg"
      style="min-width: 344px; min-height: 89px"
    >
      <q-toolbar class="text-primary q-pa-lg">
        <q-toolbar-title>
          {{ category }}
        </q-toolbar-title>
        <q-item-label class="q-pa-lg">add a book</q-item-label>
        <q-btn
          push
          color="white"
          text-color="primary"
          round
          icon="mdi-book-open-blank-variant"
        />
      </q-toolbar>
      <q-separator color="red" />
      <q-list v-for="book in books" :key="book.title">
        <q-item clickable class="q-py-md q-pl-lg">
          <q-item-section avatar>
            <q-img :src="book.img" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ book.title }}</q-item-label>
            <q-item-label caption>{{ book.author }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon class="text-red" name="mdi-star" />
          </q-item-section>
          <q-item-section side>{{ book.rating }}/5</q-item-section>
        </q-item>

        <q-separator />
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Lists",
  data() {
    return {
      lists: ["Fiction", "History", "Fantasy", "Action/Adventure"],
      books: [
        {
          title: "Scrappy Little Nobody",
          author: "Anna Kendrick",
          rating: 4.5,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/81o5XVe5dyL._AC_UL115_.jpg"
        },
        {
          title: "Bossypants",
          author: "Tina Fey",
          rating: 4,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51Ma9OmtfHL._AC_UL115_.jpg"
        },
        {
          title: "The Audacity of Hope",
          author: "Barrack Obama",
          rating: 5,
          img: "https://m.media-amazon.com/images/I/51w1xMgd3rL._SY346_.jpg"
        }
      ]
    };
  }
};
</script>
