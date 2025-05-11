from mcp.server.fastmcp import FastMCP

mcp = FastMCP("KKRMCPServer")

if __name__ == "__main__":
	mcp.run()
	
	
@mcp.resource("kyu://state") # API의 GET과 같은 역할
def get_kyu_state() -> str:

	return "Studying..."

@mcp.tool()
def tool_one(symbol:str, age: int) -> str:
    return "{symbol}'s age: {age}"


@mcp.tool()
def tool_two(year:str, month: int) -> str:
    return "cur year: {year}, month:{month}"

@mcp.prompt()
def prompt(first:str, second: str, third: str) -> str:
    return f"""
        first:
        {first},
        second:
        {second},
        third:
        {third}
"""


