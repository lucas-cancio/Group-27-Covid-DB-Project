<template>
  <div id="app">

    <div style="position: relative">
      <div class="short-it">
        <Header />
      </div>
        <h3>
            The purpose of the application is to observe multiple factors that can potentially decrease the effects of COVID-19 and analyze meaningful trends to see which factors are the most influential. Covid and its multiple variants have severely impacted society’s behaviors and normal living standards. For instance, less social interaction and outside activities decrease economic profit which results in reduced income for businesses and an increase in unemployment. Additionally, environments that thrive off of in-person engagement such as schools negatively affect the learning process and students’ academics. Therefore, finding the most effective solutions to suppress the virus will allow society to function normally under healthy conditions.
        </h3>

        <h3>
            Our goal is to provide a variety of different queries, both simple and complex, and display the resulting information and trends in such a way as to maximize user insights. The primary trends we will provide are those measuring the prevalence of COVID (cases/deaths/hospitalization/etc) and the rates of change of that prevalence given a specific context such as (period of) time, location, demographic, and more. We anticipate our trend queries will be most insightful when used to analyze the effects of certain factors such as government mask mandates. We expect knowledge of most of the factors to be obtained from the users’ outside knowledge, however, we will try to include many dates of important events/policies and visualize them as vertical lines on the graphs.
        </h3>
      <div />
    </div>

    <nav>
        <h3>GO TO</h3>
          <a href="about.html"> About </a>
          <br>
          <a href="query1.html"> Query 1 </a>
          <br>
          <a href="query2.html"> Query 2 </a>
          <br>
          <a href="query3.html"> Query 3 </a>
          <br>
          <a href="query4.html"> Query 4 </a>
          <br>
          <a href="query5.html"> Query 5 </a>
          <br>
          <a href="query6.html"> Query 6 </a>
          <br>
          <a href="queryEx.html"> Query Ex </a>
    </nav>
  </div>
</template>

<script>
import Header from "../../components/Header"

export default {
  name: 'Home',

  components: {
    Header,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.short-it {
  position: relative;

  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;

  + div {
    position: absolute;
    bottom: 0;
    z-index: 1;

    display: block;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to bottom, transparent, #fff)
  }

}

nav ul {
  margin-top: 30px
}
</style>
