import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function SingleProduct() {

  const product = useSelector(state => state.productSlice.singleProduct)

  const { id } = useParams()

          return (
                      <div>
                    {product.filter((product) => product.id === id).map((item, index) => {
                     return (
                      <div   key={index} className="flex justify-center items-center py-10">
                        <div className="pl-44 grow-[2]">
                          <img
                            className="h-[850px] rounded-lg"
                            src={item.img}
                            alt={item.name}
                          ></img>
                        </div>
                    <div className="grow-[3]">
                      <div className="max-w-lg">
                        <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                          {item.name}
                        </h5>
                        <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                          15% OFF
                        </p>
                        <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                          {item.text}
                        </p>
                        <div className="pb-4">
                          {item.size ? (
                            <div>
                              <label
                                htmlFor="size"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Pick a size
                              </label>
                              <select
                                id="size"
                                name="size"
                                value={size}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                {item.size.map((item, index) => {
                                  return (
                                    <option key={index} value={item}>
                                      {item}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          ) : (
                            <div>
                              <label
                                htmlFor="size"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Pick a size
                              </label>
                              <select
                                id="size"
                                disabled={true}
                                name="size"
                                value={size}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                {item?.size?.map((item, index) => {
                                  return (
                                    <option key={index} value={item}>
                                      {item}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          )}
                        </div>

                        <div className="pb-4">
                          <label
                            htmlFor="color"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Pick a color
                          </label>
                          <select
                            id="color"
                            name="color"
                            value={color}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            {item.color.map((color, index) => {
                              return (
                                <option key={index} value={color}>
                                  {color}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
        );
      })}
  </div>  )
}

export default SingleProduct
