import InputRadio from "@/component/InputRadio"

const BlockRelationShip = ({ index }: { index: number }) => {
  return (
    <div>
      <InputRadio radioId={`relation1`} radioName={`familyCard.${index}.relationship`} radioText={"Has Family"}  />
      <InputRadio radioId={`relation2`} radioName={`familyCard.${index}.relationship`} radioText={"None Family"}  />
    </div>
  )
}

export default BlockRelationShip