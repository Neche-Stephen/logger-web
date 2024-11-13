
type RequestData = {
    id: string;
    request?: {
      prompt: string;
      model: string;
      temperature: number;
      maxTokens: number;
      tokenCount: number;
    };
    response?: {
      text: string;
      status: number;
      tokenCount: number;
    };
    functionCalls?: any[];
    meta?: Record<string, any>;
  };
  

type data = RequestData[]

export const getTokenUsage = (data: data) => {
    let totalTokens = 0;
    let totalInputCost = 0;
    let totalOutputCost = 0;

    // console.log("from getTokenUsage", data)
    // console.log(data[0].meta?.inputTokenCost1k, data[0].meta?.request?.tokenCount)
    // console.log(data[1].meta?.inputTokenCost1k, data[1].meta?.request?.tokenCount)
    // console.log(data[0].meta?.outputTokenCost1k, data[0].meta?.request?.tokenCount)
    // console.log(data[1].meta?.outputTokenCost1k, data[1].meta?.request?.tokenCount)
    data.forEach(entry => {
        totalTokens += entry?.meta?.totalTokenCount;
        totalInputCost += entry?.meta?.inputTokenCost1k * ((entry?.request?.tokenCount ?? 0) / 1000);
        totalOutputCost += entry?.meta?.outputTokenCost1k * ((entry?.response?.tokenCount ?? 0) / 1000);
    });

    console.log("from getTokenUsage", totalTokens, totalInputCost, totalOutputCost)
  
    return {
      totalTokens,
      totalInputCost,
      totalOutputCost,
    };
  };
  