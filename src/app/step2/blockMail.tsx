import BlockItem from "@/component/Block"

const BlockMail = () => {
  return (
    <BlockItem title="Block thu 1 step 2" nameBlock='mail'>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Email.." />
      <label htmlFor="age">Age</label>
      <input type="text" id="age" name="age" placeholder="Your age.." />
    </BlockItem>
  )
}
export default BlockMail