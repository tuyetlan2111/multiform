import BlockItem from "@/component/Block"
import InputField from "@/component/InputField"
import { SelectField } from "@/component/SelectField"

const BlockCountry = () => {
  return (
    <BlockItem title="Block thu 2 step 1" nameBlock="country">
      <label htmlFor="country">Country</label>
      <SelectField name={'country'} id={'country'} dataSelect={["Australia", "Canada", "USA"]} />

      <label htmlFor="subject">Subject</label>
      <InputField name="subject" />
    </BlockItem>
  )
}
export default BlockCountry