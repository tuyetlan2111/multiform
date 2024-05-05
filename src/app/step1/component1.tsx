import BlockItem from "@/component/Block"
import InputField from "@/component/InputField"

const BlockName = () => {
  return (
    <BlockItem title="Block thu 1 step 1" nameBlock="inforName">
      <label htmlFor="firstname">First Name</label>
      <InputField name='firstname' />
      <label htmlFor="lastname">Last Name</label>
      <InputField name='lastname' />
    </BlockItem>
  )
}
export default BlockName