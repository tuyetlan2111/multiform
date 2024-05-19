'use client'
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useFormContext, useWatch } from "react-hook-form";
import BlockName from "./blockName";
import BlockCard from "./blockCard";
import BlockRelationShip from "./blockRelationShip";
import BlockBirthday from "./blockBirthday";
import BlockPIN from "./blockPIN";
import { useRouter } from "next/navigation";

const getAllNamesByKey = (values: any, key: any) => {
  // Choose which parser we are using, as arrays use [ ] notation in useForm
  const parseArray = (stack: any, property: any) => `${stack}[${property}]`;
  const parseObj = (stack: any, property: any) => `${stack}.${property}`;
  // Recursively unpack the keys
  const unpackKeys = (obj: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }, stack: string, toReturn: any[]) => {
    // Check which parser we will use
    const parser = Array.isArray(obj) ? parseArray : parseObj;
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        const returnString = parser(stack, property);
        // If its an object, recurse
        if (typeof obj[property] == 'object') {
          unpackKeys(obj[property], returnString, toReturn);
        } else {
          toReturn.push(returnString.slice(1));
        }
      }
    }
  };
  const toReturn: any[] = [];
  unpackKeys(values, '', toReturn);
  return toReturn.filter((fullKey) => fullKey.startsWith(key));
};

const triggerByKeyGenerate = (getValues: () => any, trigger: (arg0: any) => any) => (key: any) => {
  const values = getValues();
  const namesToTrigger = getAllNamesByKey(values, key);
  console.log('trigger', namesToTrigger)
  namesToTrigger.map((name) => trigger(name));
};

const FamilyMembersInput = () => {
  const watch = useWatch()
  const router = useRouter()
  const { control, formState: { errors, isValid }, trigger, register, getValues, getFieldState } = useFormContext()
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "familyCard",
    rules: {
      required: {
        value: true,
        message: "At least one is required",
      }
    }
  });
  const watchCheckbox = watch['boxConfirm']
  const handleNext = () => {
    if (watchCheckbox) {
      if (watch['familyCard'].length === 1) {
        trigger("familyCard[0]");
      } else if (watch['familyCard'].length === 2) {
        trigger("familyCard[0]");
        trigger("familyCard[1]");
      } else if (watch['familyCard'].length === 3) {
        trigger("familyCard[0]");
        trigger("familyCard[1]");
        trigger("familyCard[2]");
      }

    }

    // if (isValid && Object.keys(errors).length == 0) {
    //   router.push('/step2')
    // }
  }

  return (
    <form>
      {isValid ? 'True' : 'False'}
      <div>
        <input type="checkbox" {...register('boxConfirm')} />Click open FamilyCard
        {
          watchCheckbox && (
            fields.map((item: any, index: number) => {
              return (
                (
                  <React.Fragment key={item.id}>
                    <div className="w-full h-fit mt-4">
                      <BlockName index={index} />
                      <BlockCard index={index} />
                      <BlockRelationShip index={index} />
                      <BlockBirthday index={index} />
                      <BlockPIN index={index} />

                      {fields.length > 1 ? (
                        <button
                          className="w-full p-3 flex items-center justify-center mt-8 mb-10 mx-auto bg-white text-black font-bold rounded-md cursor-pointer border border-gray-500"
                          onClick={() => remove(index)}
                        >
                          <span className="pr-2">
                            Remove
                          </span>
                          {index + 1}枚目をキャンセル
                        </button>
                      ) : ''}
                    </div>
                  </React.Fragment>
                )
              )
            })

          )}

        {
          fields.length < 3 && <button
            className="w-full p-3 flex items-center justify-center my-8 mx-auto bg-white text-black font-bold rounded-md cursor-pointer border border-gray-500"
            onClick={() => {
              append({
                firstName: "",
                meifirstName: "",
                cardEngFirstName: "",
                cardEngLastName: "",
                relationship: "",
                dobYear: "",
                dobMonth: "",
                dobDate: "",
                // gender: "",
                PINnumber: "",
                PINnumberConfirm: "",
              });
            }}
          >
            <span className="pr-2">
              Add
            </span>
            枚数を追加する
          </button>
        }
      </div>
      <button onClick={handleNext} type="button">Next</button>
    </form>
  )

};

export default FamilyMembersInput;