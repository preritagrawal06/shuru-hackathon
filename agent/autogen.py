from agent.autogen import ConversableAgent

local_llm_config={
    "config_list": [
        {
            "model": "llama3",
            "api_key": "NULL", # Not needed
            "base_url": "http://localhost:4000"  # Your LiteLLM URL
        }
    ],
    "cache_seed": None # Turns off caching, useful for testing different models
}


jack = ConversableAgent(
    "Jack",
    llm_config=local_llm_config,
    system_message='''Your name is Jack and you are an expert fitness coach. You take the user's requirement and fitness goals into account to guide them to achieve their goal. 
                    You have to suggest them workouts first at a beginner level and then gradually increasing them as per user's requirement and their fitness goal they want to achieve. 
                    You have to be realistic and suggest user the correct way to achieve their target without any harm''',
)

emma = ConversableAgent(
    "Emma",
    llm_config=local_llm_config,
    system_message='''Your name is Emma and you are an expert nutritionist. Your work is to prepare diet plans according to the user's fitness goal and requirement. 
                    You have to keep their health in mind by checking if any usre has particular allergies to certain food''',
)

jill = ConversableAgent(
    "Jill",
    llm_config=local_llm_config,
    system_message='''Your name is Jill and you are an expert mental counsellor. Your work is to keep track of mental wellness of the user. Listen to their issues and be sympathetic towards them.
                    Suggest them a solution if it seems fit. ''',
)

# user_proxy = autogen.UserProxyAgent(
#     name="user_proxy",
#     is_termination_msg=lambda x: x.get("content", "") and "TERMINATE" in x.get("content", ""),
#     human_input_mode="NEVER",
#     max_consecutive_auto_reply=1,
# )

# start the conversation
res = jack.initiate_chat(emma, message="Emma, tell me a joke.", max_turns=2)