import BlockItem from "@/component/Block"
import InputRadio from "@/component/InputRadio"

const BlockWeather = () => {
  return (
    <BlockItem title='Text Radio'>
      <InputRadio radioId={'field-wind'} radioName={'weather'} radioText={'Wind'} />
      <InputRadio radioId={'field-sun'} radioName={'weather'} radioText={'Sun'}
        description='Get one personalized feed for all the knowledge you need as a developer.' />
      <InputRadio radioId={'field-rain'} radioName={'weather'} radioText={'Rain'} />
    </BlockItem>
  )
}
export default BlockWeather