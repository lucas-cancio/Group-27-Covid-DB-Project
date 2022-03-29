<template>
  <div id="app">
    <h1>About</h1>

    <a href="home.html"> Home </a>

    <h3>
        The purpose of the application is to observe multiple factors that can potentially decrease the effects of COVID-19 and analyze meaningful trends to see which factors are the most influential. Covid and its multiple variants have severely impacted society’s behaviors and normal living standards. For instance, less social interaction and outside activities decrease economic profit which results in reduced income for businesses and an increase in unemployment. Additionally, environments that thrive off of in-person engagement such as schools negatively affect the learning process and students’ academics. Therefore, finding the most effective solutions to suppress the virus will allow society to function normally under healthy conditions.
    </h3>

    <h3>
        The implementation of a database will significantly help the application because numerous amounts of data is required to perform the necessary tasks and analysis. There are many Covid-related databases that could be combined with other databases to do further interpretation and observe more influential aspects to the virus. Such aspects involve contagious rates and population, number of vaccines distributed, types of vaccines, the effect of vaccines and holidays on the number of Covid cases, etc. Thus, a database is needed to store the large quantity of data entries and tuples from multiple large datasets, as well as perform complex queries for analysis among different aspects.
    </h3>

    <h3>
        The main intended users of our application are people who have authority or impact regarding vaccines or public events/establishments. These people include: government officials, business owners, and academic advisors. Our intended users can utilize the application and apply the analyzed data and trends to their respective job positions to understand which aspects can reduce Covid cases and effectively apply them. For example, government officials could administer better policies, business owners can improve working conditions, and academic advisors may change school guidelines; However, the general public would also benefit from using this application to become better informed and increase their awareness about the virus. As a result, users will use our application to examine the most prominent elements that affect Covid and employ corrective measures.
    </h3>

    <h3>
        The data for this project is provided by the CDC Case Surveillance Task Force. It is updated every two weeks and its last update was added on January 18, 2022. The data set provides case surveillance of COVID 19 cases within the United States. Each tuple within this data set represents a person who has/had contracted COVID. Each tuple supplies the month that the case began, the state/county of residence, the age/sex group of the patient, the race/ethnicity of the patient, the symptom status of the patient, whether the patient was hospitalized / admitted to the ICU, whether the patient died from COVID and whether they had any underlying conditions. This dataset provides a wealth of information that can be analyzed in a variety of ways. Each data point has a month/year associated with it so analyzing this data over time is feasible and since each data point also supplies additional data points, as listed above, there will be multiple ways to configure the data to analyze different aspects of COVID over time.
    </h3>
  </div>
</template>

<script>

export default {
  name: 'About'
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
</style>
